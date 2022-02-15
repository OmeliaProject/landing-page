import { FunctionComponent, RefObject } from "react";

import styles from "../styles/about.module.css"
import ApplicationModel from "./ApplicationModel";
import Explanation from "./Explanation";

interface AboutProps {
    aboutRef : RefObject<HTMLDivElement>,
    produitRef : RefObject<HTMLDivElement>
}
 
const About: FunctionComponent<AboutProps> = ({ aboutRef, produitRef }) => {
    return (
        <div className={styles.about} ref={aboutRef}>
            <Explanation></Explanation>
            <ApplicationModel produitRef={produitRef}></ApplicationModel>
        </div>
    );
}
 
export default About;