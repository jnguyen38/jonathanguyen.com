import styles from "../styles/pages/Home.module.css";
import Image from "next/image";
import profile from "../../public/media/images/Keough Grad Pics-95.jpg"

import Socials from "../components/Socials";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function Intro(props) {
    return (
        <div id={`intro`} className={`${styles.intro} d-flex-row-c jc-sb f-wrap`}>
            <div className={`${styles.introInfo} d-flex-col-c`}>
                <h1 className={`fw-2 fs-xl mt-5 text-center`}>Hi, I&#39;m <span className={`fw-6`}>Jonathan Nguyen</span></h1>
                <p className={`fw-2 fs-sm mt-20 mb-20 text-center`}>
                    I&#39;m an Application Security Engineer at Palantir. I graduated from the the University of Notre Dame
                    with a B.S. in Computer Science in 2024. During my undergrad, I developed several
                    web app solutions during my time at Notre Dame and fostered a particular
                    interest in <span className={"fw-5"}>cryptography and information security</span>.
                </p>
                <p className={`fw-2 fs-sm mb-20 text-center`}>
                    I kind of treat this as a personal blog, so you&#39;ll hopefully
                    learn a lot about me here. Finally, if anything resonates with you please reach out, I&#39;ll be looking
                    forward to it!
                </p>
                <Socials size={32} gap={4} margin={2} theme={props.theme}/>
            </div>
            <div className={`${styles.profilePicContainer}`}>
                <Image src={profile} width={250} height={250} alt={"profile"}/>
            </div>
        </div>
    );
}

export default function index(props) {


    return (
        <main className={`relative`}>
            <Intro {...props}/>
            <About/>
            <Projects/>
            <Experience/>
            <Skills/>
            <Footer/>
        </main>
    )
}