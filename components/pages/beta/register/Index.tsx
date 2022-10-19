import stylesPage from '@styles/pages/authentication.module.css'
import styles from "@styles/modules/authentication.module.css"

import Link from "next/link";
import Head from "next/head";
import { FunctionComponent, useState } from "react";
import useTransportLayer from "@hooks/useTransportLayer";
import { Button, ButtonType} from "@components/commons/Button";
import { FormInput } from "@components/commons/FormInput";
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { useRouter } from "next/router";
import { promiseToast } from '@components/commons/promiseToast';

interface RegisterProps {}
 
const Register: FunctionComponent<RegisterProps> = () => {
    const api = useTransportLayer();
    const router = useRouter();

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const register = async () => {
        try {
            await promiseToast(
                api.currentUser.signUp({
                    email: email,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                }),
                "Inscription réussie, allez dans vos mails pour confirmer votre compte",
            )
            
            router.push("/beta/register/code-confirmation");
        } catch (error) {
        }
    }

    return (
        <>
            <Head>
                <title>{"Omelia - S'enregistrer"}</title>
            </Head>
            <NavbarBeta/>
            <div className={stylesPage.authentication}>
                <form className={styles.card}>
                    <img className={styles.visual} src="/sitting-girl.svg" alt="Sitting-people" />
                    <div className={styles.card_header}>{"S'enregistrer"}</div>
                
                    <FormInput classNameTweak={styles.form_input}
                                label={"Email"}
                                placeholder={"example@gmail.com"}
                                icon={"/lock.svg"}
                                isConfidential={false}
                                setValue={setEmail}
                                value={email}
                                />
                    
                    <div className={styles.name_container}>
                    <FormInput
                                classNameTweak={styles.half_form_input}
                                label={"Prénom"}
                                placeholder={"Jean"}
                                icon={"/user.svg"}
                                setValue={setFirstname}
                                value={firstname}
                                />
                    <FormInput
                                classNameTweak={styles.half_form_input}
                                label={"Nom"}
                                placeholder={"Teuilli"}
                                setValue={setLastname}
                                value={lastname}
                                />
                    </div>        

                    <FormInput  label={"Mots de passe"}
                                placeholder={"votre mots de passe"}
                                icon={"/mail.svg"}
                                isConfidential={true}
                                setValue={setPassword}
                                value={password}
                                />


                    <Button onClick={register} classNameTweak={styles.validation} type={ButtonType.PRIMARY} >{"S'enregistrer"}</Button>
                    <Link href="/beta/login">
                        <p className={styles.already_account}>{"J'ai déjà un compte"}</p>
                    </Link>
                </form>
            </div>
        </>
    );
}
 
export { Register };