import '../styles/root.css'
import {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomParticles from "../components/Particles";

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme])

    useEffect(() => {
        window.scrollTo(0, 0);

        const localTheme = window.localStorage.getItem("theme");
        if (localTheme) setTheme(localTheme);
    }, [])

    function handleTheme() {
        setTheme(currTheme => {
            if (currTheme === "light") return "dark";
            return "light";
        })
    }

    return (
        <div className={theme === "dark" ? "theme dark-mode" : "theme light-mode"}>
            <Header/>
            <Component {...pageProps}/>
            {/*<button onClick={handleTheme}>Change Theme</button>*/}
            <Footer/>
            <CustomParticles theme={theme}/>
        </div>
    )
}

