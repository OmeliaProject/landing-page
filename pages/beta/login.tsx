import { FunctionComponent, useEffect, useState } from "react";
import stylesPage from '@styles/pages/authentication.module.css'
import styles from "@styles/modules/authentication.module.css"
import Button, {ButtonType} from "@components/Button";
import FormInput from "@components/FormInput";
import Link from "next/link";
import Head from "next/head";
import NavbarBeta from "@components/NavbarBeta";


interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const createAccount = () => {
        console.log("create account");
    }
    const redirectToRegisterPage = () => {
        console.log("redirect to register page");
    }


    return (
        <>
            <Head>
                <title>Omelia - Login</title>
            </Head>
            <NavbarBeta/>
            <div className={stylesPage.authentication}>
                <div className={styles.card}>
                    <img className={styles.visual} src="/sitting-girl.svg" alt="Sitting-people" />
                    <div className={styles.card_header}>Connexion</div>
                
                    <FormInput classNameTweak={styles.form_input}
                                label={"Email"}
                                placeholder={"example@gmail.com"}
                                icon={"/lock.svg"}
                                isConfidential={false}
                                setValue={setEmail}
                                value={email}
                                />

                    <FormInput
                                label={"Mots de passe"}
                                placeholder={"votre mots de passe"}
                                icon={"/mail.svg"}
                                isConfidential={true}
                                setValue={setPassword}
                                value={password}
                                />
                
                    <Link href="/beta/forget-password">
                        <p className={styles.forgot_password}>Mots de passe oublie ?</p>
                    </Link>
                
                    <Button onClick={createAccount} classNameTweak={styles.validation} type={ButtonType.PRIMARY} >Se connecter</Button>
                    <Link href="/beta/register">
                        <Button type={ButtonType.SECONDARY} classNameTweak={styles.button} >S'enregistrer</Button>
                    </Link>
                    
                </div>
            </div>
        </>
    );
}
 
export default Login;