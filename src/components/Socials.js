import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/Socials.module.css";

export default function Socials() {
    return (
        <div className={`d-flex gap-4 my-2`}>
            <Link href={"https://www.github.com/jnguyen38"} className={`${styles.social}`}>
                <Image src={`/media/icons/github-mark.svg`}
                       width={32} height={32} alt={''}/>
            </Link>
            <Link href={"https://www.linkedin.com/in/jonathan-nguyen/"} className={`${styles.social}`}>
                <Image src={`/media/icons/linkedin-logo.png`}
                       width={32} height={32} alt={''}/>
            </Link>
            <Link href={"mailto:jnguyen8831@gmail.com"}>
                <Image src={`/media/icons/gmail-logo.png`}
                       width={45} height={32} alt={''} className={`${styles.gmail} ${styles.social}`}/>
            </Link>
        </div>
    )
}