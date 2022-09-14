import { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/pages/profil.module.css";

import { useRouter } from "next/router";
import useTransportLayer from "@hooks/useTransportLayer";
import { CurrentUserInfos } from "@stores/currentUser";
import { useEffect, useState } from "react";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { IIssue } from "@components/api/types/IIssue";
import { Issue } from "@components/commons/Issue";

interface ProfilProps {
    
}

const Profil : NextPage<ProfilProps> = () => {
    const api = useTransportLayer();
    const router = useRouter();
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
                <div className={styles.feedback}>

                     <p className={styles.feedback_title}>Vos retours</p>
                     {
                        issues.length > 0 ? 
                        issues.map(issue => <Issue key={issue.id} data={issue} />) :
                         <p className={styles.feedback_empty}>Vous n'avez pas fais de retours.</p>
                     }
                </div>

                <div className={styles.general_info}>

                    <p className={styles.general_info_title }>Information du compte</p>

                    <div className={styles.profil_info_container}>
                        <div className={styles.surname}>
                            <label>prénom</label>
                            <div>{user?.firstname}</div>
                        </div>
                        <div className={styles.name}>
                            <label>nom</label>
                            <div>{user?.lastname}</div>
                        </div>
                        <div className={styles.email}>
                            <label>e-mail</label>
                            <div>{user?.email}</div>
                        </div>

                        <div onClick={ChangePassword}  className={styles.change_password}>
                            changer de mot de passe.
                        </div>
                    </div>
                </div>

                <div className={styles.actions}>
                    <button onClick={disconnect}>Se déconnecter</button>
                    <button onClick={deleteAccount}>Supprimer le compte</button>
                </div>

                        

            </div>
        </>
    );

}

export {
    Profil
}