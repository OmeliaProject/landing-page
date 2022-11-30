import { RequestState } from "@components/api/types/UsersInformationMonitoring"
import { CurrentUserInfos } from "@stores/currentUser"
import styles from "@styles/pages/premium.module.css"

export const CrownPremium = (user : CurrentUserInfos | null) => 
{
    if (!user)
        return null;

    return user.premiumState == RequestState.APPROVED ?
    <div className={styles.premium_crown}>
        <img src="/crown.svg" alt="logo" />
    </div>
    : null
}