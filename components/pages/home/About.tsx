import styles from "@styles/modules/about.module.css"

import { FunctionComponent, RefObject } from "react";
import { ApplicationModel } from "@components/pages/home/ApplicationModel";
import { Explanation } from "@components/pages/home/Explanation";

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
 
export { About };