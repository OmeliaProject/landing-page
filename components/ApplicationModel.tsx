import { FunctionComponent } from "react";

import styles from "@styles/modules/application.module.css"
import TemplateExplanationModel from "./TemplateExplanationModel";

interface ApplicationModelProps {
}
 
const ApplicationModel: FunctionComponent<ApplicationModelProps> = () => {

    
    return (  
        <div className={styles.application}>
            <TemplateExplanationModel reverse={false} picture="/camera.png">
                <h1>Enregistrez vous</h1>
                <p>
                    Prenez votre téléphone et enregistrez votre future présentation.
                    Entrez une durée moyenne et c’est parti !
                </p>
            </TemplateExplanationModel>

            <TemplateExplanationModel reverse={true} picture="/score.png">
                <h1>Analyse d’Omelia</h1>
                <div>
                    Après avoir fait votre enregistrement, une intelligence artificielle  s’occupera d’analyser votre discours à travers :<br/>
                    <ul className={styles.bullet_point}>
                        <li> le sens des mots </li>
                        <li> le rythme / timbre de la voix </li>
                        <li> les tics de langage</li>
                        <li> les gestes et la position </li>
                    </ul>
                </div>
            </TemplateExplanationModel>

            <TemplateExplanationModel reverse={false} picture="/vidéo.png">
                <h1>Améliorez-vous</h1>
                <p>
                    Maintenant que vous connaissez vos erreurs il est temps d’y remédier.<br/><br/>
                    Omelia met à votre disposition des vidéos de professionnels de la prise de parole en public.
                </p>
            </TemplateExplanationModel>
            <img className="separator" src="/wave-separator-2.svg" />

        </div>
    );
}
 
export default ApplicationModel;