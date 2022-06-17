import { FunctionComponent, useEffect, useState } from "react";
import stylesPage from '@styles/pages/authentication.module.css'
import styles from "@styles/modules/authentication.module.css"
import Button, {ButtonType} from "@components/Button";
import FormInput from "@components/FormInput";
import Link from "next/link";
import Head from "next/head";
import NavbarBeta from "@components/NavbarBeta";
import currentUser from '@components/api/currentUser';
import useTransportLayer from '@hooks/useTransportLayer';
import { useRouter } from "next/router";


interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    const api = useTransportLayer();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const login = async () => {
        try {
            await api.currentUser.signIn({
                email: email,
                password: password,
            })
            router.push("/beta");
        } catch (error) {
            console.log(error);
        }
        
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
                                setValue={setEmail}
                                value={email}
                                />
        

                    <FormInput
                                label={"Mots de passe"}
                                placeholder={"votre mots de passe"}
                                icon={"/mail.svg"}
                                isConfidential
                                setValue={setPassword}
                                value={password}
                                />

                    <Link href="/beta/forget-password">
                        <p className={styles.forgot_password}>Mots de passe oublie ?</p>
                    </Link>

                    <Button onClick={login} classNameTweak={styles.validation} type={ButtonType.PRIMARY} >Se connecter</Button>
                    <Link href="/beta/register">
                        <Button type={ButtonType.SECONDARY} classNameTweak={styles.button} >{"S'enregistrer"}</Button>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default Login;
