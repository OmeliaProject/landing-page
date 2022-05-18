import Head from "next/head";
import styles from "@styles/pages/forget_password.module.css";
import { NextPage } from "next";
import NavbarBeta from "@components/NavbarBeta";
import { useState } from "react";
import FormInput from "@components/FormInput";
import Button, { ButtonType } from "@components/Button";
import Link from "next/link";

interface ForgetPasswordProps {
    
}
 
const ForgetPassword : NextPage<ForgetPasswordProps> = () => {

    const [email, setEmail] = useState("");

    const sendEmailForgetPassword = () => {
        console.log("send email");
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
                    <Link href="/beta/login">
                        <p className={styles.already_account}>Revenir à la page login</p>
                    </Link>
                
                </div>
            </div>
        </>
    );
}
 
export default ForgetPassword;