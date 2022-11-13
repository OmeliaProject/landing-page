import Head from "next/head";
import styles from "@styles/pages/forget_password.module.css";

import useApi from "@hooks/useTransportLayer";
import { NextPage } from "next";
import { useState } from "react";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { FormInput } from "@components/commons/FormInput";
import { Button, ButtonType } from "@components/commons/Button";
import { useRouter } from "next/router";
import { promiseToast } from "@components/commons/promiseToast";

interface ChangePasswordProps {
}
 
const ChangePassword : NextPage<ChangePasswordProps> = () => {

    const api = useApi();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");


    const changePassword = async () => {
        try {
            await promiseToast( api.currentUser.changePassword({
                email: email,
                code: code,
                newPassword : password
            }), "Mots de passe changé avec succès !");

            router.push("/beta/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Head>
                <title>Omelia - changer de mots de passe</title>
            </Head>
            <NavbarBeta />
            <div className={styles.forget_password}>
                <div className={styles.card}>
                    <div className={styles.header}>Changer de mots de passe</div>
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
                    <FormInput  classNameTweak={styles.input}
                                label={"Nouveau mots de passe"}
                                placeholder={"votre mots de passe"}
                                icon={"/mail.svg"}
                                isConfidential
                                setValue={setPassword}
                                value={password}
                                />
                    <Button classNameTweak={styles.button} onClick={changePassword} type={ButtonType.PRIMARY} >Changer de mots de passe</Button>
                </div>
            </div>
        </>
    );
}
 
export { ChangePassword };