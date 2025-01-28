import '../styles/root.css'
import { Analytics } from '@vercel/analytics/react';
import {useEffect, useState} from "react";
import Header from "../components/Header";
import CustomParticles from "../components/Particles";
import Head from "next/head";
import {SettingsModal} from "../components/Modal";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
    const [loadedTheme, setLoadedTheme] = useState(false);
    const [loadedParticles, setLoadedParticles] = useState(false);
    const [theme, setTheme] = useState(undefined);
    const [particles, setParticles] = useState(undefined);
    const [menu, setMenu] = useState(false);

    function scrollTo(element) {
        if (window.location.pathname !== "/")
            window.location.replace(`/`);
        if (element === "top") {
            window.scrollTo({top: 0, behavior: "smooth"});
            return;
        }

        let elem = document.getElementById(element);
        elem.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'center'
        });

        setMenu(false)
    }

    function handleMenu() {
        setMenu(curr => !curr);
    }
    function close() {
        setMenu(false);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const localTheme = JSON.parse(window.localStorage.getItem("theme"));
        if (theme === undefined && !localTheme) {
            window.localStorage.setItem("theme", JSON.stringify(false));
            setTheme(false)
        } else if (theme === undefined) {
            setTheme(localTheme)
        } else {
            window.localStorage.setItem("theme", JSON.stringify(theme));
        }
        setLoadedTheme(true)
    }, [theme])

    useEffect(() => {
        console.log(particles)
        const localParticles = JSON.parse(window.localStorage.getItem("particles"));
        if (particles === undefined && !localParticles) {
            window.localStorage.setItem("particles", JSON.stringify(false));
            setParticles(false)
        } else if (particles === undefined) {
            setParticles(localParticles)
        } else {
            window.localStorage.setItem("particles", JSON.stringify(particles));
        }
        setLoadedParticles(true)
    }, [particles])

    function toggleTheme() {setTheme(curr => !curr)}
    function toggleParticles() {setParticles(curr => !curr)}

    return loadedParticles  && loadedTheme &&  (
        <div className={theme ? "theme light-mode d-flex-row-c" : "theme dark-mode d-flex-row-c"}>
            <Head>
                <title>Jonathan Nguyen | Notre Dame | Computer Science</title>
                <meta name="description" content="Next.js app created by Jonathan Nguyen, a computer science and engineering student at the University of Notre Dame." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Jonathan Nguyen | Notre Dame | Computer Science" />
                <meta property="og:description" content="Next.js app created by Jonathan Nguyen, a computer science and engineering student at the University of Notre Dame."/>
                <meta property="og:image" content="https://jonathanguyen.com/images/about/climbing-solo.webp"/>
                <link rel="icon" href="/media/icons/favicon.png" />
            </Head>

            <Header theme={theme}
                    toggleTheme={toggleTheme}
                    close={close}
                    menu={menu}
                    handleMenu={handleMenu}
                    scrollTo={scrollTo}
                    particles={particles}
                    toggleParticles={toggleParticles}/>

            <Component theme={theme}
                       toggleTheme={toggleTheme}
                       particles={particles}
                       toggleParticles={toggleParticles}
                       {...pageProps}/>
            <Analytics/>
            {particles && <CustomParticles particles={!particles}/>}
            <div className={"defaultBG"}/>

            <SettingsModal theme={theme}
                           toggleTheme={toggleTheme}
                           particles={particles}
                           toggleParticles={toggleParticles}
                           close={close}
                           show={menu}
                           scrollTo={scrollTo}/>
        </div>
    )
}

