import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import Image from "next/image";
import {useEffect, useState} from "react";
import Socials from "../components/Socials";

import climbingSolo from "../../public/media/images/about/climbing-solo.webp";
import mcgFormal from "../../public/media/images/about/mcg-formal.webp";
import guitar from "../../public/media/images/about/guitar.webp";
import interlaken from "../../public/media/images/about/interlaken.webp";
import paraglidingGroup from "../../public/media/images/about/paragliding-group.webp";
import sliceOfLife from "../../public/media/images/projects/sliceoflife.webp";
import studybuddy from "../../public/media/images/projects/studybuddy.webp";
import thisWebsite from "../../public/media/images/projects/thiswebsite-4.webp";
import statifyArtist from "../../public/media/images/projects/statify-artist.webp";
import statifySong from "../../public/media/images/projects/statify-song.webp";
import {ProjectModal} from "../components/Modal";

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

function About() {

    function AboutItem(props) {
        function showOverlay(num) {
            document.getElementById(`about-${num}`).style.opacity = "100%";
        }

        function closeOverlay(num) {
            document.getElementById(`about-${num}`).style.opacity = "0";
        }

        return (
            <div className={`${styles.displayItem} ${styles.aboutAR} ${props.size} d-flex-row-c clickable no-select`}
                 onMouseOver={() => showOverlay(props.num)}
                 onMouseOut={() => closeOverlay(props.num)}>
                <div className={`${styles.aboutContainer}`}><div className={`${styles.imgParent} ${styles.aboutAR}`}>
                    <Image src={props.src} className={`${styles.img}`} placeholder={`blur`} style={{objectFit: "cover"}}
                           alt={''} fill sizes={"(max-width: 1200px) 25vw, 35vw"}/>
                </div></div>
                <div id={`about-${props.num}`} className={`${styles.imgOverlay}`}>
                    <div className={`${styles.overlayText} pl-2`}>
                        <p className={`fw-2`}>{props.type}</p>
                        <p className={`fw-6 fs-md`}>{props.desc}</p>
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
                and being with close <span className={`fw-5`}>friends</span>. My writing is a little drawn out, but feel free to
                learn more about me below.
            </p>
            <div className={`${styles.aboutDisplay} gap-3 my-3`}>
                <AboutItem size={styles.main} num={1} type={`Hobby`} desc={`Rock Climbing`} src={climbingSolo}/>
                <AboutItem size={styles.main} num={2} type={`Free Time`} desc={`Friends`} src={mcgFormal}/>
                <AboutItem size={styles.side} num={3} type={`Hobby`} desc={`Guitar`} src={guitar}/>
                <AboutItem size={styles.side} num={4} type={`Art`} desc={`Photography`} src={interlaken}/>
                <AboutItem size={styles.side} num={5} type={`Other`} desc={`Life Updates`} src={paraglidingGroup}/>
            </div>
            <p className={`${styles.description} fw-2 fs-xs`}>
                Damien, Chase, TJ, Chuck, Ready, Dom, Cat, Andrea, Andrew, Tmerc, Brooke, Peter, Ryan, Mary, Annie,
                Tara, Conor, Peter, Mikey, Griff, Dylan, DLM, Keaton, Rory, Ian, Emilio, Soph, Maddie, Chloe, Mary,
                Anna, Tommy, or Holly: If you&#39;re reading this, you&#39;re the best
            </p>
        </div>
    )
}

function Projects() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});

    function handleShow(num) {
        setShow(true);
    }

    function close() {
        setShow(false);
    }

    function ProjectItem(props) {
        function showOverlay(num) {
            document.getElementById(`project-${num}`).style.opacity = "100%";
        }

        function closeOverlay(num) {
            document.getElementById(`project-${num}`).style.opacity = "0";
        }

        return (
            <div className={`${styles.displayItem} ${styles.projectAR} clickable no-select`}
                 onClick={() => handleShow(props.num)}
                 onMouseOver={() => showOverlay(props.num)}
                 onMouseOut={() => closeOverlay(props.num)}>
                <div className={`${styles.projectContainer} ${styles.projectAR}`}><div className={`${styles.imgParent} ${styles.projectAR}`}>
                    <Image src={props.src} className={`${styles.img}`} placeholder={`blur`}
                           alt={''} fill sizes={"(max-width: 1200px) 25vw, 35vw"}/>
                </div></div>
                <div id={`project-${props.num}`} className={`${styles.imgOverlay}`}>
                    <div className={`${styles.overlayText} pl-2`}>
                        <p className={`fw-2`}>{props.type}</p>
                        <p className={`fw-6 fs-md`}>{props.desc}</p>
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
            <div className={`${styles.projectDisplay} d-flex f-wrap my-3 d-grid gap-4`}>
                <ProjectItem num={1} type={`Web Development`} desc={`StudyBuddyND`} src={studybuddy}/>
                <ProjectItem num={2} type={`Web Development`} desc={`Statify`} src={statifySong}/>
                <ProjectItem num={3} type={`Web Development`} desc={`This Website (Recursive! Wow!)`} src={thisWebsite}/>
                <ProjectItem num={4} type={`Web Development`} desc={`Slice of Life`} src={sliceOfLife}/>
                <ProjectItem num={5} type={`Security`} desc={`Cryptographic Fun`} src={statifyArtist}/>
                <ProjectItem num={6} type={`Security`} desc={`Encryption/Hashing CLI`} src={statifySong}/>
            </div>

            <ProjectModal show={show} close={close}/>

        </div>
    );
}

function Experience() {
    const celularity = ["Collaborated with multiple small teams of employees at the biotech company in order to facilitate Celularity’s data integration process into Palantir’s Foundry platform",
        "Performed statistical analysis on data from pre-clinical/clinical trials and development processes to identify correlations between cell donor characteristics and stem cell viability in cellular therapies"];
    const ndIT = ["Collaborated with ND University Relations employees on an IT project where we taught community admins how to operate the Notre Dame web page front-end software (my.ND.edu)"];
    const ndLD = ["Teach my peers how to properly code in Verilog HDL and operate the Quartus Prime software",
        "Fully understand combinational and sequential circuits in order to efficiently provide help to students"];
    const ford = ["Deployed a responsive and interactive quiz page that allows Ford’s customers to differentiate leasing and buying, and connected a backend database to track customer trends, created with jQuery/CSS/HTML",
        "Developed extensive experience with standard industry skills such as GitHub, mob programming, Agile development, unit testing, and various and deployment strategies",
        "Partnered with a team of Software Devs, Product Managers, and UX Designers to address real-time customer needs"];

    function ExperienceItem(props) {
        return (
            <div className={`${styles.displayItem} black-text d-flex-col-l gap-2 full-width p-3 pr-4`}>
                <div className={`d-flex jc-sb full-width`}>
                    <div className={`d-flex-col-l`}>
                        <p className={`fw-2`}>{props.company}</p>
                        <p className={`fw-5 fs-sm`}>{props.title}</p>
                    </div>
                    <p className={`fw-3 italic`}>{props.date}</p>
                </div>
                <div className={`full-width d-flex-col-l gap-2`}>
                    {props.points.map((point, index) => {
                        return (
                            <p key={index} className={`${styles.listContainer} ${styles.exploreLine} ml-4 pl-4 fw-2 fs-sm`}>{point}</p>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div id={`experience`} className={`${styles.experience} gap-2`}>
            <h2 className={`fw-6 fs-md`}>Experience.</h2>
            <p className={`${styles.description} fw-2 fs-sm`}>
                So far, I&#39;ve been lucky enough to take part in a wide variety of work experiences
                since my first year at Notre Dame. Although I&#39;m always <span className={`fw-5`}>searching for more opportunities</span>,
                here are a few that I was happy to look back on.
            </p>
            <div className={`${styles.exploreDisplay} d-flex-col-l gap-3 my-3`}>
                <ExperienceItem company={`University of Notre Dame`} title={`Logic Design Teaching Assistant`} date={`Winter 2022 - Present`} points={ndLD}/>
                <ExperienceItem company={`Ford Motor Company`} title={`Software Engineer Intern`} date={`Summer 2022`} points={ford}/>
                <ExperienceItem company={`Celularity Inc`} title={`Data Science Intern`} date={`Summer 2021`} points={celularity}/>
                <ExperienceItem company={`University of Notre Dame`} title={`Information Technology Intern`} date={`Spring 2021`} points={ndIT}/>
            </div>
        </div>
    );
}

function Skills() {
    const proficient = ["SQL", "ReactJS", "HTML", "CSS", "JS", "IntelliJ IDEA Ultimate",
        "C", "C++", "Python", "Verilog", "Node", "ExpressJS", "Linux", "CRA", "NextJS",
        "GitHub CLI/Web", "Mob Programming", "Agile Dev", "RSA Encryption", "ElGamal Encryption"];
    const experience = ["Java", "React Native", "Bash Scripting", "Bootstrap", "Excel", "MATLAB",
        "AWS Lightsail", "Apache Redhat", "Django", "Nginx", "VSCode", "Elliptic Curve Encryption",
        "CKKS Encryption", "SHE/FHE", "SSL"];
    const exposure = ["Clojure", "R", "Spring", "Postman", "Docker", "Caddy"];
    const courses = ["Data Structures", "Logic Design", "Discrete Math", "Computer Architecture", "Systems Programming",
        "Operating Systems",  "Programming Paradigms", "Database Concepts", "Cryptography"]

    function SkillsList(props) {
        return (
            <div className={`${styles.listContainer} d-flex-row-l f-wrap gap-2 ml-4 pl-4`}>
                {props.skills.map((skill, index) => {
                    return <div className={`${styles.skill} d-flex-row-c p-1`} key={index}><p className={`fs-xs`}>{skill}</p></div>
                })}
            </div>
        )
    }

    return (
        <div id={`skills`} className={`${styles.skills} gap-2`}>
            <h2 className={`fw-6 fs-md`}>Skills.</h2>
            <p className={`${styles.description} fw-2 fs-sm`}>
                Here is my <span className={`fw-5`}>exhaustive set of skills</span> pertaining
                to software development, including programming languages, libraries,
                popular frameworks, workplace strategies, popular tools or IDEs, and a list of courses
                I&#39;ve taken so far.
            </p>
            <p className={`fw-2 fs-sm mt-4`}>I am in <span className={`fw-5`}>proficient</span> in</p>
            <SkillsList skills={proficient}/>
            <p className={`fw-2 fs-sm`}>I have <span className={`fw-5`}>experience</span> with</p>
            <SkillsList skills={experience}/>
            <p className={`fw-2 fs-sm`}>I have been <span className={`fw-5`}>exposed</span> to</p>
            <SkillsList skills={exposure}/>
            <p className={`fw-2 fs-sm mt-4`}><span className={`fw-5`}>Courses</span> I have taken</p>
            <SkillsList skills={courses}/>
        </div>
    );
}

function index(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Head>
                <title>Jonathan Nguyen</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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

export default index;
