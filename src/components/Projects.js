import styles from "../styles/pages/Home.module.css";
import Image from "next/image";
import {useState} from "react";
import {InfoModal} from "./Modal";

import studybuddy from "../../public/media/images/projects/studybuddy.webp";
import statifySong from "../../public/media/images/projects/statify-song.webp";
import sliceOfLife from "../../public/media/images/projects/sliceoflife.webp";
import statifyArtist from "../../public/media/images/projects/statify-artist.webp";
import cli from "../../public/media/images/projects/cli.png";
import crypto from "../../public/media/images/projects/crypto.png";
import thisWeb from "../../public/media/images/projects/thisweb.png";

export default function Projects() {
    const projectData = [
        {
            id: 0, type: "Web Development", name: "StudyBuddyND", src: studybuddy,
            github: "https://github.com/jnguyen38/studybuddy",
            website: "https://studybuddynd.com",
            file: "/files/studybuddy-report.pdf",
            tags: ["ReactJS", "AWS Lightsail", "MySQL", "CRA", "WebDev", "ExpressJS", "Node", "Nginx", "SSL", "Git"],
            content: [
                {type: "section", value: "Description"},
                {type: "text", value: "This is StudyBuddy. This is by far my most extensive and complicated project that I've worked on in regard to Web Development. StudyBuddy is an all-in-one web application for helping students at Notre Dame study. Think of it like a Yelp! for study spots on campus. It has a database of hundreds of spaces to study, with a variety of study space attributes like loudness, natural lighting, outlet availability, etc. You can search for study spaces based on any of these attributes, and if logged in, you can even get study space recommendations based on your location or your like/review history."},
                {type: "section", value: "Development"},
                {type: "text", value: "The tech stack my team and I used to build StudyBuddy is MySQL, Express, ReactJS, Node (MERN variation) stack. I hosted the frontend of the site with Vercel. As for the backend of StudyBuddy, we created our RESTful API endpoints with Express.js, and I hosted a Node server on my Amazon Web Services (AWS) Lightsail virtual private server (VPS) instance. The majority of API requests queried from a MySQL command line client that I installed on my AWS Lightsail instance. I also needed to manually attach an SSL certificate from LetsEncrypt so that my VPS could handle https requests from the client. In an effort to handle a significant number of simultaneous API requests, I also decided to install Nginx on my Lightsail instance to act as a reverse proxy and load balancer. Nginx will also help for any other backend servers that I decide to host on my VPS."},
                {type: "text", value: "Overall, the project was a deep dive into full stack development, but I feel like it really expanded my horizons for any other full stack development I might want to embark on in the future. I ended up being really happy with the site because of its responsiveness and scalability that we implemented along the way. I hope you give it a try!"}
            ]
        },
        {
            id: 1, type: "Web Development", name: "Statify", src: statifySong,
            github: "https://github.com/jnguyen38/statify",
            tags: ["ReactJS", "Spotify API", "CRA", "WebDev", "ExpressJS", "Node", "Git"],
            content: [
                {type: "section", value: "The Problem"},
                {type: "text", value: "I'm obsessed with music, and my main medium of listening is Spotify. I love their platform and it honestly makes my life so much better. I noticed that one of the really popular tools out there to check your Spotify stats is this website called 'statsforspotify.com'. The site is great and even tracks your top artists, songs, and genres to show you how they have changed over time. The one problem is that it is very shallow (meaning you can't see anything other than a song title/artist name and the cover art) and has a terrible frontend user interface. I didn't like it, so I made Statify."},
                {type: "section", value: "Description"},
                {type: "text", value: "Statify is an all-in-one tool to check all of Spotify's song statistics. You can view your top songs, artists, and genres of the last month, last 6 months, or of all-time. You can also click on your songs or artists to see all of Spotify's stats on that item (ie acousticness, energy, danceability, genre, etc.). The best part is that everything is wrapped in a easy to use and well designed user interface. Here is a snapshot of my top artists of all time."},
                {type: "image", value: statifyArtist, AR: styles.projectAR, dim: styles.projectDim},
                {type: "section", value: "Development"},
                {type: "text", value: "Overall, Statify was my first full web app that I've tried to create. Almost every aspect of the tech stack was new to me: ReactJS with CRA, Node, Express, APIs in general, the list goes on. Even though, I was really happy with the result at the time, I want to go back and clean some parts of the code, and enhance some of performance, responsiveness, and scalability. This project is still a work in progress."}
            ]
        },
        {
            id: 2, type: "Web Development", name: "This Website (Recursive! Wow!)", src: thisWeb,
            github: "https://github.com/jnguyen38/jonathanguyen.com",
            website: "https://jonathanguyen.com",
            tags: ["ReactJS", "NextJS", "WebDev", "Node", "TSParticles", "Git"],
            content: [
                {type: "section", value: "Description"},
                {type: "text", value: "Everyone who works with me on projects at college knows that I love frontend development, so this website was a lot of fun for me to work on. Everything on this site is custom coded (aside from the 'react-tsparticles' package for the background) in CSS and JSX using the Next.js framework. This project was my first time working with Next, and compared to the production deployment of CRA, the server-side rendering speed is ridiculously faster when loading images and JS effects."},
                {type: "text", value: "Overall, even though this was my first time working with Next, I was really happy with the result. The UI felt great throughout building this site, and the design that I created feels the most professional out of all my previous work. What I especially love about this site is that everything on here is fully responsive to any screen size and scalable to any amount of new experiences, projects, or skills that I might want to add."},
                {type: "text", value: "If you like the design or even if you don't, feel free to reach out to me and let me know what you think! Feedback is important to me, so it would definitely mean a lot."},
            ]
        },
        {
            id: 3, type: "Non Profit", name: "Slice of Life", src: sliceOfLife,
            github: "https://github.com/jnguyen38/slice-of-life",
            tags: ["ReactJS", "CRA", "MySQL", "WebDev", "Node", "Git", "AWS Lightsail", "Non-Profit"],
            content: [
                {type: "section", value: "What is Slice of Life"},
                {type: "text", value: "The Slice of Life club at Notre Dame is a club of student volunteers who work directly with Ms. Gerri Griffin and her non-profit organization, Slice of Life. She founded the organization over 30 years ago in 1988 in order to provide a safe and constructive educational after-school opportunity for children in South Bend, Indiana."},
                {type: "text", value: "I first heard about Slice of Life through the club's president and my friend, Lucas DeBiase. As a volunteer, my job was really only to do homework with the kids who showed up, teach them anything they needed to know, and play games with them once all our work was done. The work was so fulfilling and was only around a 3 hour commitment per week. Not only did it give me a chance to relax and take my mind off of work, but it also gave me a chance to get to know the South Bend community a little better. I loved it right off the bat."},
                {type: "section", value: "The Problem"},
                {type: "text", value: "The problem was that with the COVID pandemic just 2 years ago, Ms. Gerri's organization was hit hard. They had to close down and lost nearly all of the students who showed up prior to quarantine. Attendance went from as many as 30 to just 3 students per day."},
                {type: "section", value: "The Solution"},
                {type: "text", value: "In an effort to help, Lucas and I went around to local schools, hung up flyers and brochures, and talked to the principles of local schools to try and let them know that Slice of Life was back."},
                {type: "text", value: "In addition to community outreach, I asked Ms. Gerri if she would potentially want a website. At this point, everything regarding their registration process was still physical (physical registration forms, informational packets, etc.). So, I thought that it would be helpful to get a site up and running."},
                {type: "section", value: "Development"},
                {type: "text", value: "That's where sliceoflifesb.org came in. I wrote the website using ReactJS with CRA, and connected the registration form to a backend MySQL database on my Amazon Web Services (AWS) Lightsail virtual private server (VPS). The site is the main point of information for families interested in the Slice of Life program. The site also allows Ms. Gerri to log in, see all the registration applications, and reach out to clients when necessary. In addition to the site, I set up a Google Business account for the organization. Hopefully, this will help get Slice of Life back on its feet in the near future."}
            ]
        },
        {
            id: 4, type: "Security", name: "Cryptography", src: crypto,
            github: "https://github.com/jnguyen38/cryptography",
            file: "/files/encryption.pdf",
            tags: ["C", "C++", "Git", "CKKS Encryption", "RSA Encryption", "Elliptic Curve Encryption", "Security"],
            content: [
                {type: "section", value: "Overview"},
                {type: "text", value: "Over the course of my cryptography class last fall, I was assigned 4 projects each relating to different encryption techniques. The first project involved recreating RSA encryption in C using the GMP arithmetic library. The second project was to recreate ElGamal Encryption in C, again with the GMP library. The goal of the third project was to implement a fully homomorphic CKKS encryption scheme in C++ using bootstrapping with the HEAAN and GMP libraries. Finally, the fourth project was focused on implementing an Elliptic Curve Encryption scheme with the PBC and GMP libraries. Overall, I really enjoyed working on these projects and they helped to kickstart my interest in information security."},
                {type: "subsection", value: "Project 1"},
                {type: "text", value: "So Project 1 focused on implementing RSA Encryption with the GMP library for storing large integers during the encryption process. The primary goal was to show that we could correctly encrypt and decrypt a message with RSA."},
                {type: "subsection", value: "Project 2"},
                {type: "text", value: "Project 2 was similar to project 1 in that our only available library was the GMP library. However, this time, we were tasked with encrypting nad decrypting with ElGamal Encryption. While doing so, we also needed to ensure that the encryption was not vulnerable to Quadratic Residue/Quadratic Non Residue attacks."},
                {type: "subsection", value: "Project 3"},
                {type: "text", value: "The most challenging of these projects was Project 3. Here we were introduced to HEAAN library for lattice based encryption. Our task was to implement a CKKS Encryption scheme with the library functions provided and use bootstrapping to reduce noise growth and essentially implement a Fully Homomorphic Encryption (FHE) scheme. This project really helped me to grasp a fundamental understanding of bootstrapping and CKKS encryption."},
                {type: "subsection", value: "Project 4"},
                {type: "text", value: "Finally, our 4th project was to implement a simplified version of the BLS signature scheme, using the Pairing Based Cryptography (PBC) library from Stanford."},
            ]
        },
        {
            id: 5, type: "Security", name: "House of Hash", src: cli,
            github: "https://github.com/jnguyen38/encryption-environment-cli",
            file: "/files/evolution-of-hashing.pdf",
            tags: ["C", "C++", "Git", "DES", "MD5", "SHA-1", "SHA-256", "Security", "Educational"],
            content: [
                {type: "section", value: "Description"},
                {type: "text", value: "The House of Hash was a fun project that served as my capstone project for my Data Structures class in the fall of 2021. The project is a command line environment that holds a local database of users and hashed passwords. The password can be hashed in popular cryptographic over the last few decades such as MD5 (1991), SHA-1 (1995), SHA-256 (2002), can be encrypted with DES (1975), or can even just be Caesar Shifted. The main goal of this project was that the user would be able to choose one of the hashes or encryptions to both see how they work under the hood and how they have evolved to be more secure over time."},
                {type: "text", value: "Working on this project really fostered my interest in the information security space, especially in regard to data encryption. After taking my Cryptography class in the fall of 2022, I've really grown to enjoy encryption defense and attack strategies and plan on pursuing the field even further."},
                {type: "section", value: "Development"},
                {type: "text", value: "In regard to development, my team and I coded the entire CLI in C++. We implemented DES, SHA-1, and SHA-256 entirely with the C++ standard library. Such a task really provided us with a deep understanding of encryption and cryptographic hashing functions."}
            ]
        }
    ]

    const [show, setShow] = useState(false);
    const [data, setData] = useState(projectData[0]);
    const [id, setId] = useState(0);


    function handleShow(num) {
        setShow(true);
        setData(projectData[num]);
        setId(num);
    }

    function close() {
        setShow(false);
    }

    function shift(val) {
        let index = (id + val) % projectData.length;
        if (index < 0) index = projectData.length + index;
        setData(projectData[index]);
        setId(index);
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
                of over the last year that you can read about.
            </p>
            <div className={`${styles.projectDisplay} my-3 d-grid gap-3`}>
                {projectData.map(project =>
                    <ProjectItem {...project} key={project.id}/>
                )}
            </div>
            <InfoModal show={show} close={close} data={data} type={"project"} shift={shift}/>
        </div>
    );
}