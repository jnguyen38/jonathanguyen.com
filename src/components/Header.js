import styles from "../styles/components/Header.module.css";
import Link from "next/link";
import Socials from "./Socials";

export default function Header(props) {
    function scrollTo(element) {
        if (window.location.pathname !== "/")
            window.location.replace(`/`);

        let elem = document.getElementById(element);
        elem.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'center'
        });
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
            <div className={`${styles.menu} d-flex-col-c gap-1`}>
                <span/><span/><span/>
            </div>
        </div>
    )
}