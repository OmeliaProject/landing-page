import { FunctionComponent } from "react";
import styles from "@styles/modules/team.module.css";
import Member from "./Member";

interface TeamProps {
}
 
const Team: FunctionComponent<TeamProps> = () => {
    return (
        <div className={styles.team}>
            <h1>Notre équipe</h1>
            <div className={styles.member_container}>
                <Member name="Matthias Vigier" role="Développeur UX/UI" avatar="/members/matthias.jpg" />
                <Member name="Albert Corson" role="Développeur BACK" avatar="/members/albert.jpg" />
                <Member name="Adrien Lucbert" role="Développeur BACK/IA" avatar="/members/adrien.png" />
                <Member name="Robin Cadinot" role="Développeur IA" avatar="/members/robin.png" />
                <Member name="Paul Saerens" role="Développeur IA" avatar="/members/paul.png" />
                <Member name="Alexis Delebecque" role="Développeur Mobile" avatar="/members/alexis.png" />
                <Member name="Louis viot" role="Développeur Mobile" avatar="/members/louis.jpg" />
            </div>
        </div>
        
    );
}
 
export default Team;