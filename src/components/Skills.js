import styles from "../styles/pages/Home.module.css";

export default function Skills() {
    const proficient = ["SQL", "ReactJS", "HTML", "CSS", "JS", "IntelliJ IDEA Ultimate",
        "C", "C++", "Python", "Verilog", "Node", "ExpressJS", "Linux", "CRA", "NextJS", "Vercel",
        "GitHub CLI/Web", "Mob Programming", "Agile Dev", "RSA Encryption", "ElGamal Encryption"];
    const experience = ["Java", "React Native", "Bash Scripting", "Bootstrap", "Excel", "MATLAB",
        "AWS Lightsail", "Apache Redhat", "Django", "Nginx", "VSCode", "Elliptic Curve Encryption",
        "CKKS Encryption", "SHE/FHE", "SSL", "VirtualBox"];
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