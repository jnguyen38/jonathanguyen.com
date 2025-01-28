import styles from "../styles/components/Modal.module.css";
import headerStyles from "../styles/components/Header.module.css";
import homeStyles from "../styles/pages/Home.module.css";

import Image from "next/image";
import Socials, {Links} from "./Socials";
import {Toggles} from "./Header";

import close from "../../public/media/icons/close.png";

function ModalTitle(props) {
    return (
        <div className={`d-flex jc-sb full-width gap-2 f-wrap`}>
            <div className={`${homeStyles.modalTitle} ${homeStyles.exploreLine} ml-2 pl-3`}>
                <p className={`fw-2`}>{props.data.type}</p>
                <p className={`fw-5 fs-smd`}>{props.data.name}</p>
            </div>
            <Links github={props.data.github} website={props.data.website} file={props.data.file}/>
        </div>
    );
}

function ModalTags(props) {
    return (
        <div className={`${homeStyles.skillsGap} d-flex-row-l f-wrap gap-1 pl-1 ml-1`}>
            {props.data.tags && props.data.tags.map((tag, index) =>
                <div className={`${homeStyles.skill} d-flex-row-c p-1`} key={index}><p className={`fs-xs`}>{tag}</p></div>
            )}
        </div>
    );
}

function ModalDesc(props) {
    return (
        <div className={`d-flex-col-l pl-1 ml-1 mt-3`}>
            {props.data.content && props.data.content.map((item, index) => {
                if (item.type === "text")
                    return <p key={index} className={`fw-2 fs-eh mb-3`}>{item.value}</p>
                if (item.type === "smalltext")
                    return <p key={index} className={`fw-2 fs-xs mb-2`}>{item.value}</p>
                if (item.type === "section")
                    return <p key={index} className={`fw-5 fs-smd mb-1`}>{item.value}</p>
                if (item.type === "subsection")
                    return <p key={index} className={`fw-5 fs-sm mb-1`}>{item.value}</p>
                if (item.type === "image")
                    return (
                        <div key={index} className={`${styles.modalImg} ${item.dim} ${item.AR} mb-5`}>
                            <Image src={item.value} alt={""} fill sizes={"35vw"}/>
                        </div>
                    )
                if (item.type === "element")
                    return item.value;
            })}
        </div>
    );
}

function ProjectImage(props) {
    return (
        <div className={`${styles.projectImage} ${homeStyles.projectAR}`}>
            <div className={`${styles.imgParent} ${homeStyles.projectAR}`}>
                <Image src={props.data.src} className={`${styles.img}`} placeholder={`blur`} alt={''} fill sizes={"35vw"}/>
            </div>
        </div>
    )
}

function AboutImage(props) {
    return (
        <div className={`${styles.aboutImage} ${homeStyles.aboutAR}`}>
            <div className={`${styles.imgParent} ${homeStyles.aboutAR}`}>
                <Image src={props.data.src} className={`${styles.img}`} placeholder={`blur`} alt={''} fill sizes={"35vw"}/>
            </div>
        </div>
    )
}

export function InfoModal(props) {
    return (
        <div className={`${styles.modal} ${props.show && styles.showModal} d-flex-row-c`} onClick={props.close}>
            <div className={`${styles.modalProject} ${props.show && styles.showProject}`} onClick={e => e.stopPropagation()}>
                <div className={`${styles.close} d-flex-row-c p-1 m-1 clickable`} onClick={props.close}>
                    <Image src={close} alt={''} width={18} height={18}/>
                </div>
                {props.type === "project" ? <ProjectImage data={props.data} show={props.show}/> : <AboutImage data={props.data} show={props.show}/>}
                <div className={`${styles.modalContent} p-4 d-flex-col-l gap-2 mb-3`}>
                    <ModalTitle data={props.data}/>
                    <ModalTags data={props.data}/>
                    <ModalDesc data={props.data}/>
                </div>
            </div>
        </div>
    );
}

export function SettingsModal(props) {
    return (
        <div className={`${styles.modal} ${props.show && styles.showModal} d-flex-col-c`} onClick={props.close}>
            <div className={`${styles.modalMain} ${props.show && styles.showMain}`} onClick={e => e.stopPropagation()}>
                <div className={`${headerStyles.modalHeader} ${props.show && headerStyles.animation} d-flex-col-l ml-5 pl-2 gap-2`}>
                    <p onClick={() => props.scrollTo(`about`)} className={`clickable fw-2 fs-sm`}>about</p>
                    <p onClick={() => props.scrollTo(`projects`)} className={`clickable fw-2 fs-sm`}>projects</p>
                    <p onClick={() => props.scrollTo(`experience`)} className={`clickable fw-2 fs-sm`}>experience</p>
                    <p onClick={() => props.scrollTo(`skills`)} className={`clickable fw-2 fs-sm`}>skills</p>
                    <p onClick={props.close} className={`clickable fw-2 fs-sm mt-40`}>close menu</p>
                    <Socials size={24} gap={2} margin={4} theme={props.theme}/>
                    <Toggles {...props} size={24}/>
                </div>
            </div>
        </div>
    )
}
