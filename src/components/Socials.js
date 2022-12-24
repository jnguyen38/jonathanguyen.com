import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/Socials.module.css";

import github from "../../public/media/icons/github-mark.svg";
import githubWhite from "../../public/media/icons/github-mark-white.svg";
import linkedIn from "../../public/media/icons/linkedin-logo.png";
import linkedInWhite from "../../public/media/icons/linkedin-logo-white.png";
import gmail from "../../public/media/icons/gmail-logo.png";
import gmailWhite from "../../public/media/icons/gmail-logo-white.png";
import open from "../../public/media/icons/open.png";
import report from "../../public/media/icons/report.png";

export default function Socials(props) {
    const aspectRatio = 1.34375;

    return (
        <div className={`${styles.socials} d-flex gap-${props.gap} my-${props.margin}`}>
            <Link href={"https://www.github.com/jnguyen38"} className={`${styles.social}`}>
                <Image src={props.theme ? github : githubWhite}
                       width={props.size} height={props.size} alt={''}/>
            </Link>
            <Link href={"https://www.linkedin.com/in/jonathan-nguyen/"} className={`${styles.social}`}>
                <Image src={props.theme ? linkedIn : linkedInWhite}
                       width={props.size} height={props.size} alt={''}/>
            </Link>
            <Link href={"mailto:jnguyen8831@gmail.com"}>
                <Image src={props.theme ? gmail : gmailWhite}
                       width={Math.round(props.size * aspectRatio)} height={props.size} alt={''} className={`${styles.social}`}/>
            </Link>
        </div>
    )
}

export function Links(props) {
    return (
        <div className={`${styles.linkGap} d-flex pl-4 mr-1`}>
            {props.file &&
                <Link href={props.file} className={`${styles.social}`}>
                    <Image src={report}
                           width={28} height={28} alt={''}/>
                </Link>
            }
            {props.github &&
                <Link href={props.github} className={`${styles.social} ${styles.file}`}>
                    <Image src={github}
                           width={28} height={28} alt={''}/>
                </Link>
            }
            {props.website &&
                <Link href={props.website} className={`${styles.social}`}>
                    <Image src={open}
                           width={30} height={30} alt={''}/>
                </Link>
            }
        </div>
    )
}