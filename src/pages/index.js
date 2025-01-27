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