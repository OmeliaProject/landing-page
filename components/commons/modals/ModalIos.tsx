import styles from '@styles/modules/download_buttons.module.css';
import { FC } from "react";
import { Button, ButtonType } from "@components/commons/Button";
import useApi from '@hooks/useTransportLayer';
import { promiseToast } from '@components/commons/promiseToast';

export const ModalIOS : FC= ({}) => 
{
    const api = useApi();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        promiseToast(
            api.user.inviteToIosBeta(),
            {
                pending: "Envoie de l'invation...",
                success: "Invitation envoyée!",
                error: "Erreur lors de l'envoie de l'invitation."
            }
        )
    }

    return (
        <>
            <div className={styles.modal_header}>
                <h2 className={styles.modal_title}>Rejoindre la Bêta IOS </h2>
                <p className={styles.modal_body}>
                Pour rejoindre la bêta IOS, cliquez sur le button ci-dessus.
                Nous vous enverrons par la suite un e-mail vous confirmant votre admission à la bêta, cela peut prendre quelques jours.
                </p>
            </div>
            <form  onSubmit={onSubmit}>
                <Button settings={{type:"submit"}} classNameTweak={styles.modal_button} type={ButtonType.PRIMARY}>
                    Participer à la bêta
                </Button>
            </form>
        </>
    );

}
