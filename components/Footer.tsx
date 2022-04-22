import { FunctionComponent } from "react";

import styles from "@styles/modules/footer.module.css";

interface FooterProps {
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.title}>Omelia</p>
            {/* <div className={styles.download}>
                <p className={styles.cta}>Télécharger l’application</p>
                <div className={styles.download_container}>
                </div>
            </div> */}

        </div>
    );
}
 
export default Footer;