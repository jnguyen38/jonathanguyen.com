import styles from "../styles/components/Modal.module.css";
import homeStyles from "../styles/pages/Home.module.css";
import Image from "next/image";
import {Links} from "./Socials";
import close from "../../public/media/icons/close.png";

export function ProjectModal(props) {
    if (!props.show) return;

    return (
        <div className={`${styles.modal} d-flex-col-c`} onClick={props.close}>
            <div className={`${styles.modalProject}`} onClick={e => e.stopPropagation()}>
                <div className={`${styles.close} d-flex-row-c p-1 m-1 clickable`} onClick={props.close}>
                    <Image src={close} alt={''} width={18} height={18}/>
                </div>
                <div className={`${styles.modalImage} ${homeStyles.projectAR}`}>
                    <div className={`${styles.imgParent}`}>
                        <Image src={props.data.src} className={`${styles.img}`} placeholder={`blur`} alt={''} fill sizes={""}/>
                    </div>
                </div>
                <div className={`${styles.modalContent} p-4 d-flex-col-l gap-2`}>
                    <div className={`d-flex jc-sb full-width gap-2 f-wrap`}>
                        <div className={`${homeStyles.listContainer} ${homeStyles.exploreLine} ml-1 pl-3`}>
                            <p className={`fw-2`}>{props.data.type}</p>
                            <p className={`fw-5 fs-smd`}>{props.data.name}</p>
                        </div>
                        <Links github={props.data.github} website={props.data.website} file={props.data.file}/>
                    </div>
                    <div className={`${homeStyles.skillsGap} d-flex-row-l f-wrap gap-1 pl-1`}>
                        {props.data.tags && props.data.tags.map((tag, index) =>
                            <div className={`${homeStyles.skill} d-flex-row-c p-1`} key={index}><p className={`fs-xs`}>{tag}</p></div>
                        )}
                    </div>
                    <div className={`d-flex-col-l gap-2 pl-1 mt-4`}>
                        {props.data.content.map((item, index) =>
                            <p key={index} className={`fw-2 fs-sm`}>{item.value}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}