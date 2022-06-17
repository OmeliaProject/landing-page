import styles from "@styles/pages/issues.module.css";
import Head from "next/head";
import NavbarBeta from "@components/NavbarBeta";
import { IIssue } from "@components/api/types/IIssue";
import Issue from "@components/Issue";
import Button, { ButtonType } from "@components/Button";
import Link from "next/link";
import useTransportLayer from '@hooks/useTransportLayer';
import { useEffect, useState } from 'react';

function Issues() {
    const api = useTransportLayer();
    const [issues, setIssues] = useState<Array<IIssue>>([]);
    const [search, setSearch] = useState("");



    const retrieveIssues = async() => {
        setIssues(await api.issues.getIssues())
    }

    const changeResearch = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    
    let filteredIssues : Array<IIssue> = [];
    
    if (issues.length > 0)
        filteredIssues = issues.filter(issue => issue.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        console.log("useEffect")
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
                            <input className={styles.input} value={search} onChange={changeResearch} type="text" placeholder="rechercher un problème" />
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
                        filteredIssues.map((issue : IIssue, index) =>  {
                            return (
                                <Issue key={index}  data={issue} />
                            )
                        })
                    }

                </div>

            </div>

        </>
    );
}



export default Issues;
