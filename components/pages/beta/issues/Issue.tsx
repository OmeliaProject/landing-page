import styles from "@styles/modules/issues.module.css";

import { FunctionComponent } from "react";
import { IIssue } from "@components/api/types/IIssue";

interface IProps {
    data : IIssue
}

const Issue: FunctionComponent<IProps> = ({data}) => {

    let  {id, timestamp, email, title, body, likes, hasLiked} = data;

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
            <div key={id} className={styles.issue}>
                <p className={styles.title}>{title}</p>
                <div className={styles.body}>
                    {body}
                </div>
                <div className={styles.footer}>
                    <p className={styles.likes}> likes: {likes}</p>
                    <p className={styles.email}>{email}</p>
                    <p className={styles.date}>{getDate(timestamp)}</p>
                </div>
            </div>
        </div>
    );
}
 
export { Issue };