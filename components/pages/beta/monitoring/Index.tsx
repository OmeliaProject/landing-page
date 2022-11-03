import { NextPage } from "next";
import Head from "next/head";

import styles from "@styles/pages/monitoring.module.css";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { useContext, useEffect, useState } from "react";
import { IFeedback } from "@components/api/types/IFeedback";
import useTransportLayer from "@hooks/useTransportLayer";
import { ModalContext } from "@components/api/modalContext";
import { ModalFeedback } from "@components/commons/modals/ModalFeeback";

const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
};

interface MonitoringProps {
}
 
const Monitoring : NextPage<MonitoringProps> = () => {

    // all feedbacks from the api
    const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
    const { handleModal } = useContext(ModalContext);
    const api = useTransportLayer();

    // useEFfect to get all feedbacks
    useEffect(() => {
        api.feedbacks.getFeedbacks().then((feedbacks) => {
            setFeedbacks(feedbacks);
        });
    }, [api.feedbacks]);

    const deleteFeedback = (id: number) => {
        api.feedbacks.deleteFeedback(id).then(() => {
            setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
        });
    };

    return (
        <>
            <Head>
                <title>{"Omelia - monitoring"}</title>
            </Head>
            <NavbarBeta />
            <div className={styles.monitoring}>
                <h1 className={styles.title}>Page Monitoring - Retours utilisateur</h1>
                <div className={styles.container_table}>
                    <table  className={styles.table}>
                        <thead className={styles.thead}>
                            <tr className={styles.tr}>
                                <th className={styles.th}>#</th>
                                <th className={styles.th}>Titre</th>
                                <th className={styles.th}>Description</th>
                                <th className={styles.th}>Date</th>
                                <th className={styles.th}>{"J'aime"}</th>
                                <th className={styles.th}> </th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {feedbacks && feedbacks.map((feedback, idx) => {
                                    return (
                                        <tr onClick={() => handleModal(ModalFeedback(feedback))} key={idx} className={styles.tr}>
                                            <td className={styles.td}>{idx + 1}</td>
                                            <td className={styles.td}>{feedback.title}</td>
                                            <td className={styles.td}>{feedback.body}</td>
                                            <td className={styles.td}>{timestampToDate(feedback.timestamp)}</td>
                                            <td className={styles.td}>{feedback.likes}</td>
                                            <td className={styles.td}>
                                                <div className={styles.delete} onClick={() => deleteFeedback(feedback.id)}>Supprimer</div>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}

export {
    Monitoring
}