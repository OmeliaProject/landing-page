import { NextPage } from "next";
import Head from "next/head";

import styles from "@styles/pages/monitoring.module.css";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { useContext, useEffect, useState } from "react";
import { IIssue } from "@components/api/types/IIssue";
import useTransportLayer from "@hooks/useTransportLayer";
import { ModalContext } from "@components/api/modalContext";


interface MonitoringProps {
}

const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
};

export const ModalIssue = (issue : IIssue) => {
    return (
        <>
            <h1 className={styles.modal_title}>{issue.title}</h1>
            <p className={styles.modal_body}>{issue.body}</p>
            <div className={styles.modal_info_container}>
                <p>date: {timestampToDate(issue.timestamp)}</p>
                <div>{"nombre de j'aime: " + issue.likes}</div>
            </div>
        </>
    );
}

 
const Monitoring : NextPage<MonitoringProps> = () => {

    // all issues from the api
    const [issues, setIssues] = useState<IIssue[]>([]);
    const { handleModal } = useContext(ModalContext);
    const api = useTransportLayer();

    // useEFfect to get all issues
    useEffect(() => {
        api.issues.getIssues().then((issues) => {
            setIssues(issues);
        });
    }, []);

    const deleteIssue = (id: number) => {
        api.issues.deleteIssue(id).then(() => {
            setIssues(issues.filter((issue) => issue.id !== id));
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
                            {issues && issues.map((issue, idx) => {
                                    return (
                                        <tr onClick={() => handleModal(ModalIssue(issue))} key={idx} className={styles.tr}>
                                            <td className={styles.td}>{idx + 1}</td>
                                            <td className={styles.td}>{issue.title}</td>
                                            <td className={styles.td}>{issue.body}</td>
                                            <td className={styles.td}>{timestampToDate(issue.timestamp)}</td>
                                            <td className={styles.td}>{issue.likes}</td>
                                            <td className={styles.td}>
                                                <div className={styles.delete} onClick={() => deleteIssue(issue.id)}>Supprimer</div>
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