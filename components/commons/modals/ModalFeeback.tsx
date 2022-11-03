import styles from "@styles/pages/monitoring.module.css";
import { IFeedback } from "@components/api/types/IFeedback";


const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
};

export const ModalFeedback = (feedback : IFeedback) => {
    return (
        <>
            <h1 className={styles.modal_title}>{feedback.title}</h1>
            <p className={styles.modal_body}>{feedback.body}</p>
            <div className={styles.modal_info_container}>
                <p>date: {timestampToDate(feedback.timestamp)}</p>
                <div>{"nombre de j'aime: " + feedback.likes}</div>
            </div>
        </>
    );
}
