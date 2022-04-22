import { FunctionComponent, RefObject } from "react";

import styles from "@styles/modules/about.module.css"
import ApplicationModel from "./ApplicationModel";
import Explanation from "./Explanation";

interface AboutProps {
    aboutRef : RefObject<HTMLDivElement>,
}
 
const About: FunctionComponent<AboutProps> = ({ aboutRef}) => {
    return (
        <div className={styles.about} ref={aboutRef}>
            <Explanation></Explanation>
            <ApplicationModel></ApplicationModel>
        </div>
    );
}
 
export default About;