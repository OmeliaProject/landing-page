import { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/pages/profil.module.css";

import { useRouter } from "next/router";
import useApi from "@hooks/useTransportLayer";
import { CurrentUserInfos } from "@stores/currentUser";
import { useEffect, useState } from "react";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { IFeedback } from "@components/api/types/IFeedback";
import { ModalFeedback } from "@components/commons/modals/ModalFeeback";
import { Button, ButtonType } from "@components/commons/Button";
import { promiseToast } from "@components/commons/promiseToast";
import { ModalChangePassword } from "@components/commons/modals/ModalChangePassword";
import useModal from "@hooks/useModal";


interface ProfilProps {
    
}

const Profil : NextPage<ProfilProps> = () => {
    const api = useApi();
    const router = useRouter();
    const { handleModal } = useModal();
    
    const [user, setUser] = useState<null | CurrentUserInfos>(null);
    const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);

        
    const ChangePassword = (currentPassword : string, newPassword : string) => {
        if (!user)
            return;

        promiseToast(
            api.currentUser.changePasswordWithOldPassword({currentPassword, newPassword}),
            {
                pending: "Changement de mots de passe...",
                success: "Mot de passe changé!",
                error: "Echec du changement de mot de passe"
            }
        )
    }

    const disconnect = () => {
        api.currentUser.signOut();
        router.push("/beta");
    }
    const deleteAccount = async () => {
        await api.currentUser.deleteAccount();
        router.push("/beta");
    }
    
    const deleteFeedback = (id: number) => {
            promiseToast(
                api.feedbacks.deleteFeedback(id),
                {
                    pending: "Suppression du retour...",
                    success: "Retour supprimé!",
                    error: "Echec de la suppression du retour"
                }    
            ).then(() => {
                setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
            })

    }


    useEffect(() => {
        api.currentUser.getUserInfos().then((user) => { setUser(user); });
        api.feedbacks.getFeedbacks().then((feedback) => {setFeedbacks(feedback);});
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
                            <FeedbackProfile key={idx} deleteFeedback={deleteFeedback} feedback={feedback} />
                        ) :
                         <p className={styles.feedback_empty}>{"Vous n'avez pas fais de retours...."}</p>
                     }
                </div>

                <div className={styles.data_container}>
                    
                    <div className={styles.general_info}>
                        <p className={styles.section_title}>Information générale</p>

                        <div className={styles.info_container}>
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
                            <Button classNameTweak={styles.password_button}
                                    onClick={() => handleModal(<ModalChangePassword  changePassword={ChangePassword}/>)}
                                    type={ButtonType.PRIMARY}>Changer de mots de passe</Button>
                        </div>
                    </div>

                </div>

                <div className={styles.actions}>
                    <Button onClick={disconnect} type={ButtonType.SECONDARY}>Se déconnecter</Button>
                    <Button classNameTweak={styles.delete} onClick={deleteAccount} type={ButtonType.TERTIARY}>supprimer son compte</Button>
                </div>

            </div>
        </>
    );

}

interface IFeedbackProfile {
    feedback: IFeedback;
    deleteFeedback: (id: number) => void;
    idx ?: number;
}

const FeedbackProfile : React.FC<IFeedbackProfile> = ({feedback, deleteFeedback, idx}) => {

    const { handleModal } = useModal();
    // state for if user is hovering the remove button
    const [isHoverDeleteButton, setHoverState] = useState(false);

    const styleDependingOnHover = isHoverDeleteButton ? styles.hover_delete_button : "";

    return (
        <div key={idx}  className={`${styles.feedback} ${styleDependingOnHover}`}>
            <div onClick={() => handleModal(<ModalFeedback feedback={feedback}/>)} className={styles.feedback_body_container}>
                <h1>{feedback.title} </h1>
                <p>{feedback.body} </p>
            </div>
            <div className={styles.feedback_delete} 
                onMouseEnter={() => setHoverState(true)}
                onMouseLeave={() => setHoverState(false)}
                onClick={() => deleteFeedback(feedback.id)}>supprimer</div>
        </div>
    )
}    

export {
    Profil
}