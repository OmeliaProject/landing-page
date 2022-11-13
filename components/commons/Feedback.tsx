import styles from "@styles/modules/feedbacks.module.css";

import { FunctionComponent, useState } from "react";
import { IFeedback } from "@components/api/types/IFeedback";
import useApi from "@hooks/useTransportLayer";

interface IProps {
    data : IFeedback
}

const Feedback: FunctionComponent<IProps> = ({data}) => {

    const api = useApi();
    let  {id, timestamp, title, body} = data;
    let [likes, setLikes] = useState(data.likes);
    let [hasLiked, setHasLike] = useState(data.hasLiked);

    const getDate = (timestamp : number) => {
        const date = new Date(timestamp * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const likePost = () => {
        if (hasLiked) {
            api.feedbacks.unlikeFeedback(id);
            setLikes(likes - 1);
        }else {
            api.feedbacks.likeFeedback(id);
            setLikes(likes + 1);
        }
        
        setHasLike(!hasLiked);
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
            <div onClick={likePost} className={styles.like_button}>
                {
                    hasLiked ?
                        <img src="/like.svg" alt="like"/>
                    :
                        <img src="/unlike.svg" alt="unlike"/>
                }

            </div>
        </div>
    );
}
 
export { Feedback };