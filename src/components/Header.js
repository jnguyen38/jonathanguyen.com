import styles from "../styles/components/Header.module.css";
import Link from "next/link";
import Socials from "./Socials";
import {useState} from "react";
import {SettingsModal} from "./Modal";

export default function Header(props) {
    const [menu, setMenu] = useState(false);

    function scrollTo(element) {
        if (window.location.pathname !== "/")
            window.location.replace(`/`);

        let elem = document.getElementById(element);
        elem.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'center'
        });

        handleMenu()
    }

    function handleMenu() {
        setMenu(curr => !curr);
    }

    return (
        <div className={`${styles.header} d-flex jc-sb`}>
            <div>
                <Link href={`/`} className={`fw-7 fs-sm`}>jonathan nguyen</Link>
            </div>
            <div className={`${styles.headerLinks} d-flex gap-3`}>
                <p onClick={() => scrollTo(`about`)} className={`clickable`}>about</p>
                <p onClick={() => scrollTo(`projects`)} className={`clickable`}>projects</p>
                <p onClick={() => scrollTo(`experience`)} className={`clickable`}>experience</p>
                <p onClick={() => scrollTo(`skills`)} className={`clickable`}>skills</p>
                <Socials size={20} gap={2} margin={0} theme={props.theme}/>
            </div>
            <div id={`menu`} className={`${styles.menu} ${menu ? styles.rotated : ""} d-flex-col-c gap-1`} onClick={handleMenu}>
                <span/><span/><span/>
            </div>
            <SettingsModal theme={props.theme} show={menu} scrollTo={scrollTo}/>
        </div>
    )
}