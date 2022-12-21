import styles from "../styles/components/Header.module.css";
import Link from "next/link";

export default function Header(props) {
    function scrollTo(element) {
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
            <div className={`d-flex gap-3`}>
                <p onClick={() => scrollTo(`about`)} className={`clickable`}>about</p>
                <p onClick={() => scrollTo(`projects`)} className={`clickable`}>projects</p>
                <p onClick={() => scrollTo(`experience`)} className={`clickable`}>experience</p>
            </div>
        </div>
    )
}