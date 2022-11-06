import styles from "@styles/modules/hpbeta.module.css";

import Link from "next/link";
import { FunctionComponent, useEffect } from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import { Button, ButtonType } from "@components/commons/Button";
import useTransportLayer from "@hooks/useTransportLayer";

interface HPBetaProps {
    
}
 
const HPBeta: FunctionComponent<HPBetaProps> = () => {

    const isUserSignedIn : boolean = useTransportLayer().currentUser.isUserSignedIn();

    const { scrollY } = useViewportScroll();
    let y1 = useTransform(scrollY, [0, 700], [0, 350]);
    let y2 = useTransform(scrollY, [0, 700], [0, -350]);

    return (
        <motion.div  className={styles.hpbeta} style={{ y: y1 }}>
            <motion.div className={styles.welcome_container} style={{ y: y2 }}>
                <div className={styles.text}>
                    <h1>{"Bienvenue dans la bêta d'Omelia"}</h1>
                    <p>{"Toute l'équipe vous remercie !"}</p>
                </div>
                <Link passHref href={isUserSignedIn ? "/beta/feedbacks" : "/beta/login"} >
                    <Button classNameTweak={styles.button_cta} type={ButtonType.PRIMARY}>
                        {
                            isUserSignedIn ? "Faire un retour" : "Rejoindre la bêta"
                        }
                    </Button>

                </Link>
            </motion.div>
        </motion.div>
    );
}
 
export { HPBeta };