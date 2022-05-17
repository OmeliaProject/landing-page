import styles from "@styles/pages/issues.module.css";
import Head from "next/head";
import NavbarBeta from "@components/NavbarBeta";
import { InferGetServerSidePropsType } from 'next'
import IIssue from "@types/IIssue";
import Issue from "@components/Issue";
import Button, { ButtonType } from "@components/Button";
import Link from "next/link";

export const getServerSideProps  = async ()  =>   {
    // create random array to fill the issues
    const issues : IIssue[] = [
        {
            id: 1,
            timestamp: Date.now(),
            email: "mathias@w;dwa",
            title: "Minuteur de marche pas après 20 min",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....", 
            likes: 0,
            hasLiked: false
        },
        {
            id: 2,
            timestamp: Date.now(),
            email: "mathias@w;dwa",
            title: "Page de connexion ne fonctionne pas avec twitter",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....", 
            likes: 0,
            hasLiked: false
        },
    ]

    return {
      props: {
        issues
      },
    }
  }
   

function Issues({ issues }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    
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