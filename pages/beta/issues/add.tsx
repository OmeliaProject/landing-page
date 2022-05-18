import Head from "next/head";
import styles from "@styles/pages/add_issues.module.css";
import { NextPage } from "next";
import NavbarBeta from "@components/NavbarBeta";
import Button, { ButtonType } from "@components/Button";
import Link from "next/link";
import { useState } from 'react';
import useTransportLayer from '@hooks/useTransportLayer';
import { useRouter } from "next/router";

interface AddIssueProps {

}

const AddIssue : NextPage<AddIssueProps> = () => {
    const api = useTransportLayer();
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const sendIssue = () => {
        api.issues.sendIssue({
            title,
            body,
        })
        router.push('/beta/issues');
    }

    return (
        <>
        <Head>
            <title>Omelia - ajouter un problème</title>
        </Head>
        <NavbarBeta />
        <div className={styles.add_issues}>
            <div className={styles.form_container}>
                <p className={styles.title}>Remonter un problème sur l’application</p>

                <div className={styles.input_container}>
                    <p className={styles.label}>Titre</p>
                    <input
                        required
                        placeholder="exemple : Page de connexion ne fonctionne pas avec twitter "
                        className={styles.small_area}
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        name="title"
                    />
                </div>

                <div className={styles.input_container}>
                    <p className={styles.label}>Quel est le problème ?</p>
                    <textarea
                        required
                        placeholder="Comment etes vous tomber sur le problème ? "
                        className={styles.big_area}
                        value={body}
                        onChange={event => setBody(event.target.value)}
                        name="issue"
                        cols={10}
                        rows={10}
                    />
                </div>

                <div className={styles.button_container}>
                    <Link href={"/beta/issues"} >
                        <Button type={ButtonType.SECONDARY}>{"revenir aux problèmes"}</Button>
                    </Link>
                    <Button onClick={sendIssue} type={ButtonType.PRIMARY}>Envoyer votre problème</Button>
                </div>

            </div>
        </div>
        </>

    );
}

export default AddIssue;

