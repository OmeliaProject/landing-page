import styles from "@styles/modules/hpbeta.module.css";

import Link from "next/link";
import { FunctionComponent } from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";


interface HPBetaProps {
    
}
 
const HPBeta: FunctionComponent<HPBetaProps> = () => {

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
                <Link href={"/beta/issues"} >
                    <a className={styles.button_cta}>Remonter un problème</a>
                </Link>
            </motion.div>
        </motion.div>
    );
}
 
export { HPBeta };