import styles from "@styles/pages/issues.module.css";
import Head from "next/head";
import NavbarBeta from "@components/NavbarBeta";
import { InferGetServerSidePropsType } from 'next'
import { IIssue } from "@types/IIssue";
import Issue from "@components/Issue";
import Button, { ButtonType } from "@components/Button";
import Link from "next/link";
import useTransportLayer from '@hooks/useTransportLayer';
import { useEffect, useState } from 'react';

function Issues() {
    const api = useTransportLayer();
    const [issues, setIssues] = useState<Array<IIssue>>([]);

    const retrieveIssues = async() => {
        setIssues(await api.issues.getIssues())
    }

    useEffect(() => {
        retrieveIssues()
    }, [])

    // take a timestamp and return a string with the date

    return (
        <>
            <Head>
                <title>Omelia - remonter un problème</title>
            </Head>
            <NavbarBeta />
            <div className={styles.issues}>

                <div className={styles.header}>
                    <div className={styles.input_container}>
                        <h1>Problèmes rencontrés :</h1>
                        <div className={styles.search}>
                            <img className={styles.logo} src="/magnifier.svg" alt="recherche" />
                            <input className={styles.input} type="text" placeholder="rechercher un problème" />
                        </div>
                    </div>
                    <Link href={"/beta/issues/add"} >
                        <Button classNameTweak={styles.button} type={ButtonType.PRIMARY}>
                            Ajouter un problème
                        </Button>
                    </Link>

                </div>
                <div className={styles.issues_container}>
                    {
                        issues.map((issue : IIssue) =>  {
                            return (
                                <Issue  data={issue} />
                            )
                        })
                    }

                </div>

            </div>

        </>
    );
}



export default Issues;
