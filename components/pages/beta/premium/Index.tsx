import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/pages/premium.module.css'
import { Button, ButtonType } from '@components/commons/Button';
import React, { useState } from 'react';
import useApi from '@hooks/useTransportLayer';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { promiseToast } from '@components/commons/promiseToast';

interface PremiumProps {
}
 
export const Premium: NextPage<PremiumProps> = () => 
{
    const api = useApi().user;
    const [hasAccepted, setHasAccepted] = useState(false);
    const router = useRouter();

    const goPreviousPage = () => {
        router.back();
    }

    const sendPremiumRequest = (event : React.FormEvent) => {
        event.preventDefault(); 
        if (!hasAccepted){
            toast.warning("Veuillez accepter les conditions d'utilisations", {position: toast.POSITION.TOP_CENTER});
            return;
        }

        promiseToast(
            api.askForPremiumAccount(),
            {
                pending: "Demande en cours...",
                success: "Demande envoyée.",
                error: "Echec de l'envoi de la demande"
            }

        )
    }

    return (
        <>
        <Head>
            <title>Omelia - Premium</title>
        </Head>
        <div className={styles.premium_page}>
            <div className={styles.hero}>
                <div data-type="interactive" onClick={goPreviousPage} className={styles.previous_page}>
                    <img src="/arrow-left.svg" alt="logo" />
                </div>
                <div className={styles.hero_title_container}>
                    <span>PASSER EN MODE </span>
                    <span>PREMIUM</span>
                </div>
            </div>
            <div className={styles.form_container}>
                <form className={styles.form} onSubmit={sendPremiumRequest}>
                    <h1 className={styles.title}>Bonjour à vous!</h1>
                    <p className={styles.explanation}>
                    {
                    "Si vous êtes sur cette page, c'est que vous aimeriez bénéficier du mode premium. Nous n'avons actuellement aucun système de paiement. C'est pourquoi nous avons mis en place une liste d'attente dans laquelle vous serez inscrit. Pas d'inquiétude, renter dans cette liste ne t'engage à rien, nous t'enverrons simplement par mail les différentes étapes à suivre pour finaliser ton passage en premium."
                    }
                    </p>
                    <div className={styles.check_box_container}>
                        <input className={styles.check_box} type="checkbox" checked={hasAccepted} onChange={(_) => setHasAccepted(!hasAccepted)}/>
                        <label className={styles.label_check_box}>{"J'ai lu et je veux passer en mode premium"}</label>
                    </div>
                    <Button settings={{type:"submit"}} classNameTweak={styles.button} type={ButtonType.PRIMARY} fullwidth >PASSER EN PREMIUM</Button>
                </form>
            </div>
        </div>
        </>

    );
}
 