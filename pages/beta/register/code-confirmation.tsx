import Head from "next/head";
import styles from "@styles/pages/forget_password.module.css";
import { NextPage } from "next";
import NavbarBeta from "@components/NavbarBeta";
import { useState } from "react";
import FormInput from "@components/FormInput";
import Button, { ButtonType } from "@components/Button";
import useTransportLayer from "@hooks/useTransportLayer";
import { useRouter } from "next/router";

interface CodeConfirmationRegisterProps {
    
}
 
const CodeConfirmationRegister : NextPage<CodeConfirmationRegisterProps> = () => {

    const api = useTransportLayer();
    const router = useRouter();
    const [code, setCode] = useState("");
    const [email, setEmail] = useState("");


    const sendEmailCodeConfirmationRegister = async () => {
        try {
            await api.currentUser.confirmPasswordCreation({
                email: email,
                code: code,
            })
            
            router.push("/beta/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Head>
                <title>Omelia - activation de votre compte</title>
            </Head>
            <NavbarBeta />
            <div className={styles.forget_password}>
                <div className={styles.card}>
                    <div className={styles.header}>Activer votre compte utilisateur !!</div>
                    <div className={styles.body}>{"Nous venons d'envoyer un code de confirmation sur votre adresse e-mail ."}</div>
                    <FormInput classNameTweak={styles.input}
                                label={"Votre email"}
                                placeholder={"example@gmail.com"}
                                icon={"/mail.svg"}
                                setValue={setEmail}
                                value={email}
                                />
                    <FormInput classNameTweak={styles.input}
                                label={"Code de verification"}
                                placeholder={"122514"}
                                icon={"/lock.svg"}
                                setValue={setCode}
                                value={code}
                                />
                    <Button classNameTweak={styles.button} onClick={sendEmailCodeConfirmationRegister} type={ButtonType.PRIMARY} >Activer votre compte</Button>
                </div>
            </div>
        </>
    );
}
 
export default CodeConfirmationRegister;