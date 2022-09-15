import styles from "@styles/pages/feedbacks.module.css";
import Head from "next/head";
import Link from "next/link";
import useTransportLayer from '@hooks/useTransportLayer';

import { NavbarBeta } from "@components/commons/NavbarBeta";
import { IFeedback } from "@components/api/types/IFeedback";
import { Feedback } from "@components/commons/Feedback";
import { Button, ButtonType } from "@components/commons/Button";
import { useEffect, useState } from 'react';

function Feedbacks() {
    const api = useTransportLayer();
    const [feedbacks, setFeedbacks] = useState<Array<IFeedback>>([]);
    const [search, setSearch] = useState("");

    const retrieveFeedbacks = async() => {
        setFeedbacks(await api.feedbacks.getFeedbacks())
    }

    const changeResearch = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    
    let filteredFeedbacks : Array<IFeedback> = [];
    
    if (feedbacks.length > 0)
        filteredFeedbacks = feedbacks.filter(feedback => feedback.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        retrieveFeedbacks()
    }, [])

    // take a timestamp and return a string with the date

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
                    <Link href={"/beta/feedbacks/add"} >
                        <Button classNameTweak={styles.button} type={ButtonType.PRIMARY}>
                            Ajouter votre avis !
                        </Button>
                    </Link>

                </div>
                <div className={styles.feedbacks_container}>
                    {
                        filteredFeedbacks.map((feedback : IFeedback, index) =>  {
                            return (
                                <Feedback key={index}  data={feedback} />
                            )
                        })
                    }

                </div>

            </div>

        </>
    );
}



export { Feedbacks };
