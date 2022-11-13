import Head from "next/head";
import styles from "@styles/pages/forget_password.module.css";
import Link from "next/link";
import useApi from "@hooks/useTransportLayer";

import { NextPage } from "next";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { useState } from "react";
import { FormInput } from "@components/commons/FormInput";
import { Button, ButtonType } from "@components/commons/Button";
import { useRouter } from "next/router";
import { promiseToast } from "@components/commons/promiseToast";

interface ForgetPasswordProps {
}
 
const ForgetPassword : NextPage<ForgetPasswordProps> = () => {
    const api = useApi();
    const router = useRouter();
    const [email, setEmail] = useState("");

    const sendEmailForgetPassword = () => {
            promiseToast(
                api.currentUser.forgetPassword({email}),
                {
                    pending: "Envoi du code de réinitialisation...",
                    success: "Code de réinitialisation envoyé!",
                    error: "Echec de l'envoi du code de réinitialisation"
                }
                ).then(() => {
                router.push("/beta/forget-password");
            })
    }

    return (
        <>
            <Head>
                <title>Omelia - mot de passe oublié</title>
            </Head>
            <NavbarBeta />
            <div className={styles.forget_password}>
                <div className={styles.card}>
                    <div className={styles.header}>Mots de passe oublié ?</div>
                    <div className={styles.body}>Saisissez votre adresse électronique et nous vous enverrons un lien pour accéder à nouveau à votre compte.</div>
                    <FormInput classNameTweak={styles.input}
                                label={"Votre email"}
                                placeholder={"example@gmail.com"}
                                icon={"/mail.svg"}
                                isConfidential={false}
                                setValue={setEmail}
                                value={email}
                                />
                
                    <Button classNameTweak={styles.button} onClick={sendEmailForgetPassword} type={ButtonType.PRIMARY} >envoyer le lien de récupération</Button>
                    <Link passHref href="/beta/login">
                        <p className={styles.already_account}>Revenir à la page login</p>
                    </Link>
                
                </div>
            </div>
        </>
    );
}
 
export { ForgetPassword };