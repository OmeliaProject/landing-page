import styles from '@styles/modules/download_buttons.module.css';

import { FC, useState } from "react";
import { Button, ButtonType } from "@components/commons/Button";
import { FormInput } from "@components/commons/FormInput";
import useApi from '@hooks/useTransportLayer';
import { promiseToast } from '../promiseToast';


export const ModalIOS : FC= ({}) => {
    const [email, setEmail] = useState("");
    const api = useApi();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        promiseToast(
            api.currentUser.inviteToIosBeta(),
            {
                pending: "Sending invite...",
                success: "Invite sent!",
                error: "Failed to send invite"
            }
        )
    }

    return (
        <>
            <div className={styles.modal_header}>
                <h2 className={styles.modal_title}>Rejoindre la Bêta IOS </h2>
                <p className={styles.modal_body}>
                Pour rejoindre la bêta IOS, veuillez entrer votre adresse mail ci-dessous.
                Nous vous enverrons par la suite un e-mail de confirmation, cela peut prendre quelques jours.
                </p>
            </div>
            <form  onSubmit={onSubmit}>
                <FormInput
                        label={"adresse email"}
                        placeholder={"antoine@gmail.com"}
                        icon={"/mail.svg"}
                        isConfidential
                        setValue={setEmail}
                        value={email}
                        />
                <Button settings={{type:"submit"}} classNameTweak={styles.modal_button} type={ButtonType.PRIMARY}>
                    Participer à la bêta
                </Button>
            </form>
        </>
    );

}
