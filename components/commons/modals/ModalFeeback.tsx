import { IFeedback } from "@components/api/types/IFeedback";
import { FC } from "react";
import { timestampToDate } from "@components/commons/useful";
import styles from "@styles/modules/modals/feedback.module.css";

interface ModalFeebackProps {
    feedback: IFeedback;
}

export const ModalFeedback : FC<ModalFeebackProps> = ({feedback}) => 
{
    return (
        <>
            <h2 className={styles.modal_title}>{feedback.title}</h2>
            <p className={styles.modal_body}>{feedback.body}</p>
            <div className={styles.modal_info_container}>
                <p>date: {timestampToDate(feedback.timestamp)}</p>
                <div>{"nombre de j'aime: " + feedback.likes}</div>
            </div>
        </>
    );
}
