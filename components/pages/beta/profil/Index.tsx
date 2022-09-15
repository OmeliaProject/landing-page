import { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/pages/profil.module.css";

import { useRouter } from "next/router";
import useTransportLayer from "@hooks/useTransportLayer";
import { CurrentUserInfos } from "@stores/currentUser";
import { useContext, useEffect, useState } from "react";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { IIssue } from "@components/api/types/IIssue";
import { ModalContext } from "@components/api/modalContext";
import { ModalIssue } from "../monitoring/Index";
import { Button, ButtonType } from "@components/commons/Button";

interface ProfilProps {
    
}

const Profil : NextPage<ProfilProps> = () => {
    const api = useTransportLayer();
    const router = useRouter();
    const { handleModal } = useContext(ModalContext);

    
    const [user, setUser] = useState<null | CurrentUserInfos>(null);
    const [issues, setIssues] = useState<IIssue[]>([]);
        
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

    const deleteIssue = async (id: number) => {
        await api.issues.deleteIssue(id);
        setIssues(issues.filter(issue => issue.id !== id));
    }

    const loadInfos = async () => {
        const user = await api.currentUser.getUserInfos();
        setUser(user);
        const issues = await api.issues.getIssues();
        setIssues(issues);
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
                        issues.length > 0 ? 
                        issues.map(issue =>
                            <div onClick={() => handleModal(ModalIssue(issue))} className={styles.feedback}>
                                <div className={styles.feedback_body_container}>
                                    <h1>{issue.title} </h1>
                                    <p>{issue.body} </p>
                                </div>
                                <div className={styles.feedback_delete} onClick={() => deleteIssue(issue.id)}>supprimer</div>
                            </div>
                            ) :
                         <p className={styles.feedback_empty}>Vous n'avez pas fais de retours....</p>
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