import { useEffect, useState } from "react";
import { FunctionComponent } from "react";

import styles from "@styles/modules/howtohelp.module.css";
import Step from "./Step";
import Carousel from "./Carousel";

interface HowToHelpProps {
}
 
const HowToHelp: FunctionComponent<HowToHelpProps> = () => {

    const [widthScreen, setWidthScreen] = useState(0);

    const steps : Array<JSX.Element> = [
        <Step key={0} svgPath="/download.svg" title="Télécharger l'app" description="Omelia n'est pas encore disponible sur les stores, mais vous pouvez installer l'APK en cliquant sur l'image ci-dessus !" link="https://apk-bucket.s3.eu-west-3.amazonaws.com/omelia.apk"/>,
        <Step key={1}  svgPath="/feedback.svg" title="Remonter les erreurs" description="Vous rencontrez des erreurs sur l'application ? Allez dans 'remonter une erreur' et créez un post"/>,
        <Step key={2} svgPath="/discord.svg" title="Être sur le discord" description="Vous souhaitez encore plus nous aider et en savoir plus sur Omelia, rejoignez nous sur discord&nbsp;!" />
    ];

    useEffect(
        () => {
            setWidthScreen(window.innerWidth);
            window.addEventListener("resize", () => {
                setWidthScreen(window.innerWidth);
            });
    }, []);

    const isMobile = widthScreen < 1024;

    return (
        <div className={styles.howtohelp}>
            <h1>Comment aider pour la bêta ?</h1>
        {
            isMobile ?
                <Carousel classNameCarousel={styles.step_container}  width={widthScreen}  wrap>
                    {steps}
                </Carousel>
            :
            <div className={styles.step_container}>
                    {steps}
            </div>
        }
        </div>  

    );
}
 
export default HowToHelp;