import Link from "next/link";
import Head from "next/head";

import stylesPage from '@styles/pages/authentication.module.css'
import styles from "@styles/modules/authentication.module.css"

import useApi from '@hooks/useTransportLayer';
import { FormEvent, FunctionComponent, useState } from "react";
import { Button, ButtonType} from "@components/commons/Button";
import { FormInput } from "@components/commons/FormInput";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { promiseToast } from "@components/commons/promiseToast";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => 
{
    const api = useApi();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e : FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.warning("Veuillez remplir tous les champs", {position: toast.POSITION.TOP_CENTER});
            return;
        }

        promiseToast(
            api.user.signIn({email: email, password: password,}),
            {
                pending: "Connexion...",
                success: "Vous êtes connecté.",
                error: "Echec de la connexion"
            }
            ).then(() => {
                router.push("/beta");
            })
        
    }

    return (
        <>
            <Head>
                <title>Omelia - Login</title>
            </Head>
            <NavbarBeta/>
            <form className={stylesPage.authentication} onSubmit={login}>
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

                    <Link passHref href="/beta/forget-password">
                        <p className={styles.forgot_password}>Mots de passe oublie ?</p>
                    </Link>

                    <Button settings={{type : "submit"}} classNameTweak={styles.validation} type={ButtonType.PRIMARY} >Se connecter</Button>
                    <Link passHref href="/beta/register">
                        <Button type={ButtonType.SECONDARY} classNameTweak={styles.button} >{"S'enregistrer"}</Button>
                    </Link>

                </div>
            </form>
        </>
    );
}

export { Login };
