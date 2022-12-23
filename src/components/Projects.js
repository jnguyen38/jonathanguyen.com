import styles from "../styles/pages/Home.module.css";
import Image from "next/image";
import {useState} from "react";
import {InfoModal} from "./Modal";

import studybuddy from "../../public/media/images/projects/studybuddy.webp";
import statifySong from "../../public/media/images/projects/statify-song.webp";
import thisWebsite from "../../public/media/images/projects/thiswebsite-4.webp";
import sliceOfLife from "../../public/media/images/projects/sliceoflife.webp";
import statifyArtist from "../../public/media/images/projects/statify-artist.webp";

export default function Projects() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({id: -1});

    const projectData = [
        {
            id: 0, type: "Web Development", name: "StudyBuddyND", src: studybuddy,
            github: "https://github.com/jnguyen38/studybuddy",
            website: "https://studybuddynd.com",
            file: "/files/studybuddy-report.pdf",
            tags: ["ReactJS", "AWS Lightsail", "MySQL", "CRA", "WebDev", "ExpressJS", "Node", "Nginx", "SSL", "Git"],
            content: [
                {type: "text", value: "This is StudyBuddy."},
                {type: "text", value: "The backend logic for StudyBuddy"}
            ]
        },
        {
            id: 1, type: "Web Development", name: "Statify", src: statifySong,
            github: "https://github.com/jnguyen38/statify",
            tags: ["ReactJS", "Spotify API", "CRA", "WebDev", "ExpressJS", "Node", "Git"],
            content: [{type: "text", value: ""}]
        },
        {
            id: 2, type: "Web Development", name: "This Website (Recursive! Wow!)", src: thisWebsite,
            github: "https://github.com/jnguyen38/jonathanguyen.com",
            website: "https://jonathanguyen.com",
            tags: ["ReactJS", "NextJS", "WebDev", "Node", "TSParticles", "Git"],
            content: [
                {type: "text", value: "Everyone who works with me on projects at college knows that I love front-end development, so this website was a lot of fun for me to work on. Everything on this site is custom coded (aside from the 'react-tsparticles' package for the background) in CSS and JSX using the Next.js framework. This project was my first time working with Next, and compared to the production deployment of CRA, the server-side rendering speed is ridiculously faster when loading images and JS effects."},
                {type: "text", value: "Overall, even though this was my first time working with Next, I was really happy with the result. The UI felt great throughout building this site, and the design that I created feels the most professional out of all my previous work. What I especially love about this site is that everything on here is fully responsive to any screen size and scalable to any amount of new experiences, projects, or skills that I might want to add."},
                {type: "text", value: "If you like the design or even if you don't, feel free to reach out to me and let me know what you think! Feedback is important to me, so it would definitely mean a lot."},
            ]
        },
        {
            id: 3, type: "Web Development", name: "Slice of Life", src: sliceOfLife,
            github: "https://github.com/jnguyen38/slice-of-life",
            tags: ["ReactJS", "CRA", "MySQL", "WebDev", "Node", "Git", "AWS Lightsail", "Non-Profit"],
            content: [{type: "text", value: ""}]
        },
        {
            id: 4, type: "Security", name: "Cryptography", src: statifyArtist,
            github: "https://github.com/jnguyen38/cryptography",
            tags: ["C", "C++", "Git", "CKKS Encryption", "RSA Encryption", "Elliptic Curve Encryption", "Security"],
            content: [{type: "text", value: ""}]
        },
        {
            id: 5, type: "Security", name: "Encryption/Hash CLI", src: statifySong,
            github: "https://github.com/jnguyen38/encryption-environment-cli",
            tags: ["C", "C++", "Git", "DES", "MD5", "SHA-1", "SHA-256", "Security", "Educational"],
            content: [{type: "text", value: ""}]
        }
    ]

    function handleShow(num) {
        setShow(true);
        setData(projectData[num]);
    }

    function close() {
        setShow(false);
    }

    function ProjectItem(props) {
        function showOverlay(num) {document.getElementById(`project-${num}`).style.opacity = "100%";}
        function closeOverlay(num) {document.getElementById(`project-${num}`).style.opacity = "0";}

        return (
            <div className={`${styles.displayItem} ${styles.projectAR} clickable no-select`}
                 onClick={() => handleShow(props.id)} onMouseOver={() => showOverlay(props.id)} onMouseOut={() => closeOverlay(props.id)}>
                <div className={`${styles.projectContainer} ${styles.projectAR}`}>
                    <div className={`${styles.imgParent} ${styles.projectAR}`}>
                        <Image src={props.src} className={`${styles.img}`} placeholder={`blur`} alt={''} fill sizes={"35vw"}/>
                    </div>
                </div>
                <div id={`project-${props.id}`} className={`${styles.imgOverlay}`}>
                    <div className={`${styles.overlayText} pl-2`}>
                        <p className={`fw-2`}>{props.type}</p>
                        <p className={`fw-6 fs-md`}>{props.name}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id={`projects`} className={`${styles.projects} gap-2`}>
            <h2 className={`fw-6 fs-md`}>Projects.</h2>
            <p className={`${styles.description} fw-2 fs-sm`}>
                Over the course of my time at Notre Dame, I&#39;ve worked on a variety of academic
                and personal projects. Projects came in all sizes, were written a variety of languages, and made use of
                tons of open source libraries. While I think there&#39;s still a lot more to improve
                and learn, here are a few of the <span className={`fw-5`}>projects I&#39;m most proud </span>
                of over the last year.
            </p>
            <div className={`${styles.projectDisplay} my-3 d-grid gap-3`}>
                {projectData.map(data =>
                    <ProjectItem {...data} key={data.id}/>
                )}
            </div>
            <InfoModal show={show} close={close} data={data} type={"project"}/>
        </div>
    );
}