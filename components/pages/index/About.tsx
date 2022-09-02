import { FunctionComponent, RefObject } from "react";

import styles from "@styles/modules/about.module.css"
import ApplicationModel from "@components/pages/index/ApplicationModel";
import Explanation from "@components/pages/index/Explanation";

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