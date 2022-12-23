import styles from "../styles/components/Header.module.css";
import Link from "next/link";
import Socials from "./Socials";
import {useState} from "react";
import {SettingsModal} from "./Modal";

import dark from "../../public/media/icons/dark.png";
import light from "../../public/media/icons/light.png";
import darkOn from "../../public/media/icons/blur-on-white.png";
import darkOff from "../../public/media/icons/blur-off-white.png";
import lightOn from "../../public/media/icons/blur-on.png";
import lightOff from "../../public/media/icons/blur-off.png";
import Image from "next/image";

export function Toggles(props) {
    return (
        <div className={`d-flex gap-1`}>
            <div onClick={props.toggleTheme} className={`d-flex-row-c clickable`}>
                <Image src={props.theme ? light : dark} width={props.size} height={props.size} alt={''}/>
            </div>
            <div onClick={props.toggleParticles} className={`d-flex-row-c clickable`}>
                <Image src={props.theme ? props.particles ? lightOn : lightOff : props.particles ? darkOn : darkOff} width={Math.round(props.size * 1.16)} height={Math.round(props.size * 1.16)} alt={''}/>
            </div>
        </div>
    )
}

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

        setMenu(false);
    }

    function handleMenu() {
        setMenu(curr => !curr);
    }
    function close() {
        setMenu(false);
    }

    return (
        <div className={`${styles.header} d-flex jc-sb`}>
            <div className={`d-flex gap-3`}>
                <Link href={`/`} className={`fw-7 fs-sm`}>jonathan nguyen</Link>
                <div className={`${styles.toggleHeader}`}>
                    <Toggles {...props} size={24}/>
                </div>
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
            <SettingsModal close={close} show={menu} scrollTo={scrollTo} {...props}/>
        </div>
    )
}