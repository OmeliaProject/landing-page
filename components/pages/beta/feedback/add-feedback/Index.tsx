import Head from "next/head";
import styles from "@styles/pages/add_feedbacks.module.css";
import Link from "next/link";
import useTransportLayer from '@hooks/useTransportLayer';

import { NextPage } from "next";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { Button, ButtonType } from "@components/commons/Button";
import { useState } from 'react';
import { useRouter } from "next/router";

interface AddFeedbackProps {
}

const AddFeedback : NextPage<AddFeedbackProps> = () => {
    const api = useTransportLayer();
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const sendFeedback = () => {
        api.feedbacks.sendFeedback({
            title,
            body,
        })
        router.push('/beta/feedbacks');
    }

    return (
        <>
        <Head>
            <title>Omelia - Faire un retour</title>
        </Head>
        <NavbarBeta />
        <div className={styles.add_feedbacks}>
            <div className={styles.form_container}>
                <p className={styles.title}>Faire un retour sur l’application</p>

                <div className={styles.input_container}>
                    <p className={styles.label}>Titre</p>
                    <input
                        required
                        placeholder="exemple : Une super idée qui ajouterait un plus à l’application."
                        className={styles.small_area}
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        name="title"
                    />
                </div>

                <div className={styles.input_container}>
                    <p className={styles.label}>Dites nous en plus !</p>
                    <textarea
                        required
                        placeholder="une features que vous souhaitez ajouter? "
                        className={styles.big_area}
                        value={body}
                        onChange={event => setBody(event.target.value)}
                        name="feedback"
                        cols={10}
                        rows={10}
                    />
                </div>

                <div className={styles.button_container}>
                    <Link href={"/beta/feedbacks"} >
                        <Button type={ButtonType.SECONDARY}>{"revenir au menu"}</Button>
                    </Link>
                    <Button onClick={sendFeedback} type={ButtonType.PRIMARY}>Envoyer votre problème</Button>
                </div>

            </div>
        </div>
        </>

    );
}

export { AddFeedback };

