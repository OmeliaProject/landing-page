import styles from "@styles/pages/feedbacks.module.css";
import Head from "next/head";
import Link from "next/link";
import useApi from '@hooks/useTransportLayer';
import { NavbarBeta } from "@components/commons/NavbarBeta";
import { IFeedback } from "@components/api/types/IFeedback";
import { Feedback } from "@components/commons/Feedback";
import { Button, ButtonType } from "@components/commons/Button";
import { useEffect, useState } from 'react';

function Feedbacks() {
    const api = useApi();
    const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
    const [search, setSearch] = useState("");

    const changeResearch = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    
    let filteredFeedbacks : Array<IFeedback> = [];
    
    if (feedbacks.length > 0)
        filteredFeedbacks = feedbacks.filter(feedback => feedback.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        api.feedbacks.getFeedbacks().then((feedbacks : IFeedback[]) => {
            setFeedbacks(feedbacks);
        });
    }, [])

    return (
        <>
            <Head>
                <title>Omelia - remonter un avis</title>
            </Head>
            <NavbarBeta />
            <div className={styles.feedbacks}>

                <div className={styles.header}>
                    <div className={styles.input_container}>
                        <h1>Avis remontés :</h1>
                        <div className={styles.search}>
                            <img className={styles.logo} src="/magnifier.svg" alt="recherche" />
                            <input className={styles.input} value={search} onChange={changeResearch} type="text" placeholder="rechercher un avis" />
                        </div>
                    </div>
                    <Link passHref href={"/beta/feedbacks/add"} >
                        <Button classNameTweak={styles.button} type={ButtonType.PRIMARY}>
                            Ajouter votre avis !
                        </Button>
                    </Link>

                </div>
                <div className={styles.feedbacks_container}>
                    {
                        filteredFeedbacks.length > 0 ? 
                        filteredFeedbacks.map((feedback : IFeedback, index) =>  {
                            return (
                                <Feedback key={index}  data={feedback} />
                            )
                        })
                        : 
                        <div className={styles.no_feedbacks}>Aucun avis remonté pour le moment :)</div>
                    }
                </div>

            </div>

        </>
    );
}

export { Feedbacks };
