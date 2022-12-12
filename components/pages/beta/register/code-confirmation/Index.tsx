import styles from "@styles/pages/forget_password.module.css";
import Head from "next/head";
import useApi from "@hooks/useTransportLayer";
import { NextPage } from "next";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { useState } from "react";
import { FormInput } from "@components/commons/FormInput";
import { Button, ButtonType } from "@components/commons/Button";
import { useRouter } from "next/router";
import { promiseToast } from "@components/commons/promiseToast";

interface CodeConfirmationRegisterProps {
    
}
 
const CodeConfirmationRegister : NextPage<CodeConfirmationRegisterProps> = () => 
{
    const api = useApi();
    const router = useRouter();
    const [code, setCode] = useState("");
    const [email, setEmail] = useState("");

    const sendEmailCodeConfirmationRegister = () => {

        promiseToast(
            api.user.confirmPasswordCreation({
                email: email,
                code: code,
            })
            , 
            {
                pending: "Confirmation de votre mots de passe...",
                error: "Une erreur est survenue !",
                success: "Erreur lors de le confirmation de votre mots de passe."
            }
        ).then( () => {
            router.push("/beta/login");
            }
        )
    }

    return (
        <>
            <Head>
                <title>Omelia - Activation de votre compte</title>
            </Head>
            <NavbarBeta />
            <div className={styles.forget_password}>
                <div className={styles.card}>
                    <div className={styles.header}>Activez votre compte utilisateur !</div>
                    <div className={styles.body}>{"Nous venons d'envoyer un code de confirmation sur votre adresse email ."}</div>
                    <FormInput classNameTweak={styles.input}
                                label={"Votre email"}
                                placeholder={"example@gmail.com"}
                                icon={"/mail.svg"}
                                setValue={setEmail}
                                value={email}
                                />
                    <FormInput classNameTweak={styles.input}
                                label={"Code de vérification"}
                                placeholder={"122514"}
                                icon={"/lock.svg"}
                                setValue={setCode}
                                value={code}
                                />
                    <Button classNameTweak={styles.button} onClick={sendEmailCodeConfirmationRegister} type={ButtonType.PRIMARY} >Activez votre compte</Button>
                </div>
            </div>
        </>
    );
}
 
export { CodeConfirmationRegister };
