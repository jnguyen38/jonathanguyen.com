import styles from "../styles/pages/Home.module.css";
import Socials from "../components/Socials";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function Intro(props) {
    return (
        <div id={`intro`} className={`${styles.intro} d-flex-col-l gap-2`}>
            <div className={`${styles.introInfo} d-flex-col-l`}>
                <h1 className={`fw-2 fs-xl mt-5`}>Hi, I&#39;m <span className={`fw-6`}>Jonathan Nguyen</span></h1>
                <p className={`fw-2 fs-sm mt-20 mb-40`}>
                    I&#39;m an Application Security Engineer at Palantir. I graduated from the the University of Notre Dame
                    with a B.S. in Computer Science. During my undergrad, I developed several
                    web app solutions during my time at Notre Dame and fostered a particular
                    interest in <span className={"fw-5"}>cryptography and information security</span>.
                </p>
                <Socials size={32} gap={4} margin={2} theme={props.theme}/>
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