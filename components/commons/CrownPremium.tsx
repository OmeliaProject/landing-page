import { RequestState } from "@components/api/types/UsersInformationMonitoring"
import { CurrentUserInfos } from "@stores/currentUser"
import styles from "@styles/pages/premium.module.css"
import { FC } from "react";


export function isUserPremium(user : CurrentUserInfos | null) : boolean
{
    if (!user || !(user.premiumState == RequestState.APPROVED))
        return false;

    return user.premiumState == RequestState.APPROVED;
}

export const CrownPremium:FC = () => 
{
    return (
        <div className={styles.premium_crown}>
            <img src="/crown.svg" alt="logo" />
        </div>
    )
}