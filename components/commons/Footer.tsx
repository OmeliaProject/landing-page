import { FunctionComponent } from "react";
import styles from "@styles/modules/footer.module.css";
import { AndroidStoreButton, AppleStoreButton } from "./DownloadButtons";

interface FooterProps {
}
 
const Footer: FunctionComponent<FooterProps> = () => 
{
    return (
        <div className={styles.footer}>
            <p className={styles.title}>Omelia</p>
            <div className={styles.download}>
                <AndroidStoreButton theme="light"/>
                <AppleStoreButton theme="light"/>
            </div>
        </div>
    );
}
 
export { Footer };