import { FunctionComponent } from "react";

import styles from "@styles/modules/timeline_project.module.css";
import { CardTimeline, LineType } from "@components/pages/timeline/CardTimeline";

interface TimelineProjectProps {
}
 
const TimelineProject: FunctionComponent<TimelineProjectProps> = () => {
    return (
        <div className={styles.timeline_project}>
            <CardTimeline 
                    title={"Bêta et utilisateurs"}
                    body={"L'application Omelia entre dans une phase de test. Les retours sont consultables sur le site d'Omelia et nous prenons en compte les avis afin d'améliorer l'application et de corriger les éventuels bugs."} 
                    time={"06/2022"}
                    line={LineType.DOTTED}
                />
            <CardTimeline 
                    title={"API, Intelligence Artificielle et Application"}
                    body={"Les recherches concernant l'IA sont terminées et le développement à démarré. L'équipe Api et l'équipe application mobile travaillent de pair pour proposer une version bêta le plus vite possible. Le site vitrine est complètement revisité pour intégrer la charte graphique et le bêta testing."} 
                    version={"0.0.0"}
                    time={"03/2022"}
                    line={LineType.SOLID}
                    />
            <CardTimeline 
                    title={"Charte graphique et Application"}
                    body={"Nous avons créé une charte graphique ainsi que des maquettes pour l'application mobile et le site vitrine. Tout ceci permet d'homogénéiser l'environnement Omelia et de le rendre unique."} 
                    version={"0.0.0"}
                    time={"12/2021"}
                    line={LineType.SOLID}
                    />
            <CardTimeline 
                    title={"Recherche, Api, Application"}
                    body={"La recherche sur l'intelligence artificielle débute. L'api commence à être fonctionnelle et l'application mobile voit ses premières pages se réaliser."} 
                    version={"0.0.0"}
                    time={"09/2021"}
                    line={LineType.SOLID}
                    />
            <CardTimeline 
                    title={"Initialisation du projet"}
                    body={"Nous avons commencé par diviser l'équipe Omelia en plusieurs équipes de travail, chacune responsable de différentes partie techniques. Nous avons aussi réaliser un business plan de l'application."} 
                    version={"0.0.0"}
                    time={"06/2021"}
                    line={LineType.SOLID}
                    /> 
            <CardTimeline 
                    title={"Création du projet Omelia"}
                    body={"Nous avons cherché une problématique qui nous correspondait. De la est venue l'idée de créer notre application. Des professionnels ont validés notre idée."} 
                    version={"0.0.0"}
                    time={"03/2021"}
                    line={LineType.NONE}
                    />   
        </div>
    );
}
 
export { TimelineProject };