import styles from "../styles/pages/Home.module.css";
import Image from "next/image";

import climbingSolo from "../../public/media/images/about/climbing-solo.webp";
import mcgFormal from "../../public/media/images/about/mcg-formal.webp";
import guitar from "../../public/media/images/about/guitar.webp";
import interlaken from "../../public/media/images/about/interlaken.webp";
import paraglidingGroup from "../../public/media/images/about/paragliding-group.webp";
import {useState} from "react";
import {InfoModal} from "./Modal";

export default function About() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({id: -1});
    const aboutData = [
        {
            size: styles.main, id: 0, type: "Hobby", name: "Rock Climbing", src: climbingSolo,
            content: [{type: "text", value: ""}]
        },
        {size: styles.main, id: 1, type: "Free Time", name: "Friends and Family", src: mcgFormal},
        {size: styles.side, id: 2, type: "Hobby", name: "Guitar", src: guitar},
        {size: styles.side, id: 3, type: "Art", name: "Photography", src: interlaken},
        {size: styles.side, id: 4, type: "Other", name: "Life Updates", src: paraglidingGroup},
    ];

    function handleShow(num) {
        setShow(true);
        setData(aboutData[num]);
    }

    function close() {
        setShow(false);
    }

    function AboutItem(props) {
        function showOverlay(num) {document.getElementById(`about-${num}`).style.opacity = "100%";}
        function closeOverlay(num) {document.getElementById(`about-${num}`).style.opacity = "0";}

        return (
            <div className={`${styles.displayItem} ${styles.aboutAR} ${props.size} d-flex-row-c clickable no-select`}
                 onClick={() => handleShow(props.id)} onMouseOver={() => showOverlay(props.id)} onMouseOut={() => closeOverlay(props.id)}>
                <div className={`${styles.aboutContainer}`}>
                    <div className={`${styles.imgParent} ${styles.aboutAR}`}>
                        <Image src={props.src} className={`${styles.img}`} placeholder={`blur`} style={{objectFit: "cover"}} alt={''} fill sizes={"35vw"}/>
                    </div>
                </div>
                <div id={`about-${props.id}`} className={`${styles.imgOverlay}`}>
                    <div className={`${styles.overlayText} pl-2`}>
                        <p className={`fw-2`}>{props.type}</p>
                        <p className={`fw-6 fs-md`}>{props.name}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id={`about`} className={`${styles.about} gap-2`}>
            <h2 className={`fw-6 fs-md`}>About.</h2>
            <p className={`${styles.description} fw-2 fs-sm`}>
                Aside from academics, I love doing four things in life: rock <span className={`fw-5`}>climbing</span>,
                playing <span className={`fw-5`}>guitar</span>, <span className={`fw-5`}>photography</span>,
                and being with close <span className={`fw-5`}>friends and family</span>. My writing is a little drawn out, but feel free to
                learn more about me below.
            </p>
            <div className={`${styles.aboutDisplay} gap-3 my-3`}>
                {aboutData.map(data => <AboutItem {...data} key={data.id}/>)}
            </div>
            <p className={`${styles.description} fw-2 fs-xs`}>
                Damien, Chase, TJ, Chuck, Ready, Dom, Cat, Andrea, Andrew, Tmerc, Brooke, Peter, Ryan, Mary, Annie,
                Tara, Conor, Peter, Mikey, Griff, Dylan, DLM, Keaton, Rory, Ian, Emilio, Soph, Maddie, Chloe, Mary,
                Anna, Tommy, or Holly: If you&#39;re reading this, you&#39;re the best
            </p>
            <InfoModal show={show} close={close} type={"about"} data={data}/>
        </div>
    )
}