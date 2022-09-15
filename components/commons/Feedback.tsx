import styles from "@styles/modules/feedbacks.module.css";

import { FunctionComponent } from "react";
import { IFeedback } from "@components/api/types/IFeedback";

interface IProps {
    data : IFeedback
}

const Feedback: FunctionComponent<IProps> = ({data}) => {

    let  {id, timestamp, title, body, likes} = data;

    const getDate = (timestamp : number) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div className={styles.container}>
            <div className={styles.border}></div>
            <div key={id} className={styles.feedback}>
                <p className={styles.title}>{title}</p>
                <div className={styles.body}>
                    {body}
                </div>
                <div className={styles.footer}>
                    <p className={styles.likes}> likes: {likes}</p>
                    <p className={styles.date}>{getDate(timestamp)}</p>
                </div>
            </div>
        </div>
    );
}
 
export { Feedback };