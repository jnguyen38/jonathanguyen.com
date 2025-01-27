import styles from "../styles/components/Header.module.css";
import Socials from "./Socials";

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
    return (
        <div className={`${styles.header} d-flex jc-sb gap-40`}>
            <div className={`d-flex gap-3`}>
                <p onClick={() => scrollTo(`top`)} className={`${styles.title} fw-7 fs-sm clickable`}>jonathan nguyen</p>
                <div className={`${styles.toggleHeader}`}>
                    <Toggles {...props} size={15}/>
                </div>
            </div>
            <div className={`${styles.headerLinks} d-flex gap-3`}>
                <p onClick={() => props.scrollTo(`about`)} className={`clickable fw-2`}>about</p>
                <p onClick={() => props.scrollTo(`projects`)} className={`clickable fw-2`}>projects</p>
                <p onClick={() => props.scrollTo(`experience`)} className={`clickable fw-2`}>experience</p>
                <p onClick={() => props.scrollTo(`skills`)} className={`clickable fw-2`}>skills</p>
                <Socials size={15} gap={2} margin={0} theme={props.theme}/>
            </div>
            <div id={`menu`} className={`${styles.menu} ${props.menu ? styles.rotated : ""} d-flex-col-c gap-1 clickable`} onClick={props.handleMenu}>
                <span/><span/><span/>
            </div>
        </div>
    )
}