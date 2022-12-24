import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import Socials from "../components/Socials";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

function Intro(props) {
    return (
        <div id={`intro`} className={`${styles.intro} d-flex-col-l gap-2`}>
            <h1 className={`fw-2 fs-xl mt-5`}>Hi, I&#39;m <span className={`fw-6`}>Jonathan Nguyen</span></h1>
            <p className={`fw-2 fs-sm`}>
                I&#39;m a full stack software developer studying at the
                University of Notre Dame. I have developed several
                web app solutions during my time at Notre Dame and have a particular
                interest in <span className={"fw-5"}>cryptography and information security</span> -
                specifically pentesting, data encryption, and security response.
            </p>
            <p className={`fw-2 fs-sm`}>
                Currently, I am developing a secure and efficient decentralized
                alternative to multimedia copyrighting.
            </p>
            <Socials size={32} gap={4} margin={2} theme={props.theme}/>
        </div>
    );
}

export default function index(props) {
    return (
        <div>
            <Head>
                <title>Jonathan Nguyen | Notre Dame | Computer Science</title>
                <meta name="description" content="Next.js app created by Jonathan Nguyen, a computer science and engineering student at the University of Notre Dame." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Jonathan Nguyen | Notre Dame | Computer Science" />
                <meta property="og:description" content="Next.js app created by Jonathan Nguyen, a computer science and engineering student at the University of Notre Dame."/>
                <meta property="og:image" content="https://jonathanguyen.com/images/about/climbing-solo.webp"/>
                <link rel="icon" href="/media/icons/favicon.png" />
            </Head>
            <main>
                <Intro {...props}/>
                <About/>
                <Projects/>
                <Experience/>
                <Skills/>
            </main>
        </div>
    )
}