import styles from '../styles/pages/Home.module.css';
import Image from "next/image";

import aws from "../../public/media/icons/skills/aws.png";
import bash from "../../public/media/icons/skills/bash.png";
import bootstrap from "../../public/media/icons/skills/bootstrap.svg";
import c from "../../public/media/icons/skills/c.png";
import clojure from "../../public/media/icons/skills/clojure.png";
import cpp from "../../public/media/icons/skills/cpp.png";
import css from "../../public/media/icons/skills/css.png";
import django from "../../public/media/icons/skills/django.png";
import docker from "../../public/media/icons/skills/docker.png";
import excel from "../../public/media/icons/skills/excel.png";
import verilog from "../../public/media/icons/skills/file-type-verilog.svg";
import firebase from "../../public/media/icons/skills/firebase.png";
import git from "../../public/media/icons/skills/git.png";
import html from "../../public/media/icons/skills/html.png";
import intellij from "../../public/media/icons/skills/intellij.png";
import java from "../../public/media/icons/skills/java.png";
import js from "../../public/media/icons/skills/js.png";
import kubernetes from "../../public/media/icons/skills/kubernetes.png";
import vercel from "../../public/media/icons/skills/logo-vercel.svg";
import matlab from "../../public/media/icons/skills/matlab.png";
import mysql from "../../public/media/icons/skills/mysql.png";
import next from "../../public/media/icons/skills/nextjs-icon.png";
import nginx from "../../public/media/icons/skills/nginx.png";
import node from "../../public/media/icons/skills/node.png";
import postman from "../../public/media/icons/skills/postman.svg";
import python from "../../public/media/icons/skills/python.png";
import r from "../../public/media/icons/skills/r.png";
import react from "../../public/media/icons/skills/react.png";
import redhat from "../../public/media/icons/skills/redhat.png";
import spring from "../../public/media/icons/skills/spring.png";
import vscode from "../../public/media/icons/skills/vscode.png";

export default function Skills() {
    const proficient = [
        {icon: java, skill: "Java"},
        { icon: mysql, skill: "SQL"},
        { icon: react, skill: "React"},
        { icon: html, skill: "HTML"},
        { icon: css, skill: "CSS"},
        { icon: js, skill: "JS"},
        { icon: intellij, skill: "IntelliJ"},
        { icon: firebase, skill: "Firebase"},
        { icon: c, skill: "C"},
        { icon: cpp, skill: "C++"},
        { icon: python, skill: "Python"},
        { icon: verilog, skill: "Verilog"},
        { icon: node, skill: "Node"},
        { icon: next, skill: "Next"},
        { icon: react, skill: "React Native"},
        { icon: vercel, skill: "Vercel"},
        { icon: git, skill: "Git"},
        { icon: docker, skill: "Docker"},
        { icon: "", skill: "Agile Development"},
        { icon: "", skill: "Cryptography"},
    ];
    const experience = [
        { icon: bash, skill: "Bash"},
        { icon: bootstrap, skill: "Bootstrap"},
        { icon: excel, skill: "Excel"},
        { icon: matlab, skill: "MATLAB"},
        { icon: aws, skill: "AWS"},
        { icon: redhat, skill: "Apache Redhat"},
        { icon: django, skill: "Django"},
        { icon: nginx, skill: "Nginx"},
        { icon: vscode, skill: "VSCode"},
        { icon: kubernetes, skill: "Kubernetes"}
    ];
    const exposure = [
        {icon: clojure, skill: "Clojure"},
        { icon: r, skill: "R"},
        { icon: spring, skill: "Spring"},
        { icon: postman, skill: "Postman"},
    ];
    const courses = [
        { icon: "", skill: "Data Structures"},
        { icon: "", skill: "Logic Design"},
        { icon: "", skill: "Discrete Math"},
        { icon: "", skill: "Computer Architecture"},
        { icon: "", skill: "Systems Programming"},
        { icon: "", skill: "Operating Systems"},
        { icon: "", skill: "Programming Paradigms"},
        { icon: "", skill: "Database Concepts"},
        { icon: "", skill: "Cryptography"}
    ];

    function SkillsList(props) {
        return (
            <div className={`${styles.listContainer} d-flex-row-c f-wrap gap-2`}>
                {props.skills.map((skill, index) => {
                    return (
                        <div className={`${styles.skill} d-flex-row-c p-1 gap-1`} key={index}>
                            {skill.icon !== "" &&
                                <div className={`d-flex-row-c`}>
                                    <Image src={skill.icon} alt={skill.skill} width={15} height={15}/>
                                </div>
                            }
                            <p className={`fs-xs`}>{skill.skill}</p>
                        </div>
                    )
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
            <p className={`fw-2 fs-sm mt-3`}>I have <span className={`fw-5`}>experience</span> with</p>
            <SkillsList skills={experience}/>
            <p className={`fw-2 fs-sm mt-3`}>I have been <span className={`fw-5`}>exposed</span> to</p>
            <SkillsList skills={exposure}/>
            <p className={`fw-2 fs-sm mt-3`}><span className={`fw-5`}>Courses</span> I have taken</p>
            <SkillsList skills={courses}/>
        </div>
    );
}