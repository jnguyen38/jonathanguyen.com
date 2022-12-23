import '../styles/root.css'
import {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomParticles from "../components/Particles";

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState(true)
    const [particles, setParticles] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0);

        const localTheme = JSON.parse(window.localStorage.getItem("theme"));
        setTheme(localTheme);
    }, [])

    useEffect(() => {
        window.localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme])

    function toggleTheme() {setTheme(curr => !curr)}
    function toggleParticles() {setParticles(curr => !curr)}

    return (
        <div className={theme ? "theme light-mode" : "theme dark-mode"}>
            <Header theme={theme} toggleTheme={toggleTheme} particles={particles} toggleParticles={toggleParticles}/>
            <Component {...pageProps} theme={theme}/>
            <Footer/>
            {particles ? <CustomParticles theme={theme} particles={particles}/> : <div className={"defaultBG"}/>}
        </div>
    )
}

