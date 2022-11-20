import { ChangeEvent, FC, useState} from "react";
import { PremiumState, PremiumStateType, UserWithPendingPremium } from "@components/api/types/UserWithPendingPremium";
import { Button, Select, Textarea } from "@geist-ui/core";
import styles from "@styles/pages/dashboard.module.css";
import useApi from "@hooks/useTransportLayer";
import useModal from "@hooks/useModal";
import { promiseToast } from "../promiseToast";


interface ModalChangePremiumStatusProps {
    user : UserWithPendingPremium,
    updateUser : (user : UserWithPendingPremium) => void
}

export const ModalChangePremiumStatus : FC<ModalChangePremiumStatusProps> = ({user,updateUser}) =>
{
    const api = useApi();
    const {handleModal} = useModal();
    const [premiumState, setPremiumState] = useState<PremiumStateType>(user.premiumState);
    const [adminComment, setAdminComment] = useState("");

    const changePremiumState = () => {

        promiseToast(
            api.currentUser.changeUserPremiumState({
                email: user.email,
                response: premiumState,
                adminComment: adminComment
            }),
            {
                success: "État du premium changé",
                error: "Erreur lors du changement de l'état du premium",
                pending : "Changement de l'état du premium en cours"
            }
        ).then((_) => {
            user.premiumState = premiumState;
            updateUser(user);
            handleModal();
            }
        )
    }

    return (
        <>

        <div>
            <div className={styles.data_container}>
                <label>Commentaire admin:</label>
                
                <div className={styles.status_container}>
                    <label>Status:</label>
                    <Select onChange={(value) => setPremiumState(value as PremiumStateType)} placeholder="Status">
                        {
                            Object.values(PremiumState).map((state, index) => {
                                return <Select.Option key={index} disabled={state == user.premiumState ? true : false} value={state}>{state}</Select.Option>
                            })
                        }
                    </Select>
                </div>
            </div>
            <Textarea
                value={adminComment}
                onChange={(e : ChangeEvent<HTMLTextAreaElement>) => setAdminComment(e.target.value)}
                placeholder="Commentaire du changement de status (Obligatoire dans le cas d'un refus)"
                width="100%" />
            <Button onClick={changePremiumState} className={styles.modal_button} width="100%"  type="secondary">Changer le status</Button>
        </div>
        </>
    );
}
