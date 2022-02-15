import { FunctionComponent, RefObject } from "react";

import styles from "../styles/application.module.css"
import TemplateExplanationModel from "./TemplateExplanationModel";

interface ApplicationModelProps {
    produitRef : RefObject<HTMLDivElement>
    
}
 
const ApplicationModel: FunctionComponent<ApplicationModelProps> = ({produitRef}) => {

    
    return (  
        <div ref={produitRef} className={styles.models_container}>
            <TemplateExplanationModel reverse={false} number={1} picture="/camera.png">
                <h1>Enregistrez vous</h1>
                <p>
                    Prenez votre téléphone et enregistrez votre future présentation.<br/><br/>
                    Entrez une durée moyenne<br/> et c’est parti !
                </p>
            </TemplateExplanationModel>

            <TemplateExplanationModel reverse={true} number={2} picture="/score.png">
                <h1>Analyse d’Omelia</h1>
                <div>
                    Après avoir fais votre enregistrement. Une intelligence artificiel  s’occupera d’analyser votre discours à travers :<br/><br/>
                    <ul className={styles.bullet_point}>
                        <li> le sens des mots </li>
                        <li> le rythme / timbre de la voix </li>
                        <li> les tics de language</li>
                        <li> les gestes et la position </li>

                    </ul>
                </div>
            </TemplateExplanationModel>

            <TemplateExplanationModel reverse={false} number={3} picture="/vidéo.png">
                <h1>Ameliorez-vous</h1>
                <p>
                    Maintenant que vous connaissez vos erreurs il est temps d’y remédier.<br/><br/>
                    Omelia met à votre disposition des vidéos de professionnelles de la prise de parole en public
                </p>
            </TemplateExplanationModel>
            <img className="separator" src="wave-separator-2.svg" />

        </div>
    );
}
 
export default ApplicationModel;