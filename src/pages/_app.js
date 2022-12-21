import '../styles/root.css'
import {useEffect, useState} from "react";
import Header from "../components/Header";

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

    return (
        <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
            <Header/>
            <Component {...pageProps}/>
        </div>
    )
}

