import Head from "next/head";
import styles from "@styles/pages/add_issues.module.css";
import { NextPage } from "next";
import NavbarBeta from "@components/NavbarBeta";
import Button, { ButtonType } from "@components/Button";
import Link from "next/link";

interface AddIssueProps {
    
}
 
const AddIssue : NextPage<AddIssueProps> = () => {

    const sendIssue = () => {
        console.log("send issue");
    }

    return (
        <>
        <Head>
            <title>Omelia - ajouter un problème</title>
        </Head>
        <NavbarBeta />
        <div className={styles.add_issues}>
            <div className={styles.form_container}>
                <p className={styles.title}>Remonter un problème sur l’application</p>
                
                <div className={styles.input_container}>
                    <p className={styles.label}>Titre</p>
                    <input 
                            required 
                            placeholder="exemple : Page de connexion ne fonctionne pas avec twitter " 
                            className={styles.small_area} 
                            name="title" 
                            ></input>
                </div>
                
                <div className={styles.input_container}>
                    <p className={styles.label}>Quel est le problème ?</p>
                    <textarea 
                            required 
                            placeholder="Comment etes vous tomber sur le problème ? "
                            className={styles.big_area} 
                            name="issue"
                            cols={10} rows={10}></textarea>
                </div>

                <div className={styles.button_container}>
                    <Link href={"/beta"} >
                        <Button type={ButtonType.SECONDARY}>revenir à l'accueil</Button>
                    </Link>
                    <Button onClick={sendIssue} type={ButtonType.PRIMARY}>Envoyer votre problème</Button>
                </div>

            </div>
        </div>
        </>

    );
}
 
export default AddIssue;