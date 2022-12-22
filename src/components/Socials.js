import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/Socials.module.css";

export default function Socials(props) {
    const aspectRatio = 1.34375;

    return (
        <div className={`${styles.socials} d-flex gap-${props.gap} my-${props.margin}`}>
            <Link href={"https://www.github.com/jnguyen38"} className={`${styles.social}`}>
                <Image src={props.theme ? `/media/icons/github-mark.svg` : `/media/icons/github-mark-white.svg`}
                       width={props.size} height={props.size} alt={''}/>
            </Link>
            <Link href={"https://www.linkedin.com/in/jonathan-nguyen/"} className={`${styles.social}`}>
                <Image src={props.theme ? `/media/icons/linkedin-logo.png` : `/media/icons/linkedin-logo-white.png`}
                       width={props.size} height={props.size} alt={''}/>
            </Link>
            <Link href={"mailto:jnguyen8831@gmail.com"}>
                <Image src={props.theme ? `/media/icons/gmail-logo.png` : `/media/icons/gmail-logo-white.png`}
                       width={Math.round(props.size * aspectRatio)} height={props.size} alt={''} className={`${styles.social}`}/>
            </Link>
        </div>
    )
}