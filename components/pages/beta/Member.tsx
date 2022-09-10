import { FunctionComponent } from "react";

import styles from "@styles/modules/team.module.css";


interface MemberProps {
    name: string;
    role: string;
    avatar: string;
}
 
const Member: FunctionComponent<MemberProps> = ({name, role, avatar}) => {
    return (
        <div className={styles.member_card}>
            <img className={styles.avatar} src={avatar} alt={name} />
            <div className={styles.description}>
                <p className={styles.name}>{name}</p>
                <p className={styles.role}>{role}</p>
            </div>
        </div>
    );
}
 
export default Member;