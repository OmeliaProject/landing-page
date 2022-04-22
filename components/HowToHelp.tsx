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
        <Step svgPath="/download.svg" title="Télecharger l’app" description="Allez sur l'appstore / google play et téléchargez Omelia ! Entrainez-vous dès que vous pouvez !" />,
        <Step svgPath="/feedback.svg" title="Remonter les erreurs" description="Vous rencontrez des erreurs sur l'application ? Allez dans 'faire remonter une erreur'   et créez un post !" />,
        <Step svgPath="/discord.svg" title="Être sur le discord" description="Vous souhaitez encore plus nous aider et en savoir plus sur Omelia, rejoignez nous sur discord !" />
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
            <h1>Comment aider pour la beta ?</h1>
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