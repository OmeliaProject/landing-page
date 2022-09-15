import { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/pages/profil.module.css";

import { useRouter } from "next/router";
import useTransportLayer from "@hooks/useTransportLayer";
import { CurrentUserInfos } from "@stores/currentUser";
import { useContext, useEffect, useState } from "react";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { IFeedback } from "@components/api/types/IFeedback";
import { ModalContext } from "@components/api/modalContext";
import { ModalFeedback } from "../monitoring/Index";
import { Button, ButtonType } from "@components/commons/Button";

interface ProfilProps {
    
}

const Profil : NextPage<ProfilProps> = () => {
    const api = useTransportLayer();
    const router = useRouter();
    const { handleModal } = useContext(ModalContext);

    
    const [user, setUser] = useState<null | CurrentUserInfos>(null);
    const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
        
    const ChangePassword = async() => {
        if (!user)
            return;
    
        api.currentUser.forgetPassword({email: user.email});
        router.push("/beta/change-password")
    }

    const disconnect = () => {
        api.currentUser.signOut();
        router.push("/beta");
    }
    const deleteAccount = async () => {
        await api.currentUser.deleteAccount();
        router.push("/beta");
    }

    const deleteFeedback = async (id: number) => {
        await api.feedbacks.deleteFeedback(id);
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
    }

    const loadInfos = async () => {
        const user = await api.currentUser.getUserInfos();
        setUser(user);
        const feedbacks = await api.feedbacks.getFeedbacks();
        setFeedbacks(feedbacks);
    }

    useEffect(() => {
        loadInfos();
    }, []);


    return (
        <>
            <Head>
                <title>{"Omelia - Profil"}</title>
            </Head>
            <NavbarBeta />
            <div className={styles.profil}>
                <div className={styles.title}>Votre profil </div>
                
                <div className={styles.feedback_container}>
                     <p className={styles.section_title}>Vos retours</p>
                     {
                        feedbacks.length > 0 ? 
                        feedbacks.map((feedback, idx) =>
                            <div key={idx}  className={styles.feedback}>
                                <div onClick={() => handleModal(ModalFeedback(feedback))} className={styles.feedback_body_container}>
                                    <h1>{feedback.title} </h1>
                                    <p>{feedback.body} </p>
                                </div>
                                <div className={styles.feedback_delete} onClick={() => deleteFeedback(feedback.id)}>supprimer</div>
                            </div>
                            ) :
                         <p className={styles.feedback_empty}>{"Vous n'avez pas fais de retours...."}</p>
                     }
                </div>

                <div className={styles.general_info}>

                    <p className={styles.section_title }>Information du compte</p>

                    <div className={styles.profil_info_container}>
                        <div className={styles.info}>
                            <label>prénom</label>
                            <div>{user?.firstname}</div>
                        </div>
                        <div className={styles.info}>
                            <label>nom</label>
                            <div>{user?.lastname}</div>
                        </div>
                        <div className={styles.info}>
                            <label>e-mail</label>
                            <div>{user?.email}</div>
                        </div>

                        <div onClick={ChangePassword}  className={styles.change_password}>
                            changer de mot de passe.
                        </div>
                    </div>
                </div>

                <div className={styles.actions}>
                    <Button onClick={disconnect} type={ButtonType.PRIMARY}>Se déconnecter</Button>
                    <Button classNameTweak={styles.delete} onClick={deleteAccount} type={ButtonType.SECONDARY}>supprimer son compte</Button>
                </div>

                        

            </div>
        </>
    );

}

export {
    Profil
}