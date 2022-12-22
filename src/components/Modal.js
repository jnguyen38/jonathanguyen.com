import styles from "../styles/components/Modal.module.css";

export function ProjectModal(props) {
    if (!props.show) return;

    return (
        <div className={`${styles.modal}`} onClick={props.close}>
            <div>
                <p>Hello</p>
            </div>
        </div>
    );
}