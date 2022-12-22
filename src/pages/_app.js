import '../styles/root.css'
import {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomParticles from "../components/Particles";

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0);

        const localTheme = JSON.parse(window.localStorage.getItem("theme"));
        setTheme(localTheme);
    }, [])

    useEffect(() => {
        window.localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme])

    function handleTheme() {
        setTheme(currTheme => !currTheme)
    }

    return (
        <div className={theme ? "theme light-mode" : "theme dark-mode"}>
            <Header theme={theme}/>
            <Component {...pageProps} theme={theme}/>
            <button onClick={handleTheme}>Change Theme</button>
            <Footer/>
            <CustomParticles theme={theme}/>
        </div>
    )
}

