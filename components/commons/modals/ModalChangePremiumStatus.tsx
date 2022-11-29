import { ChangeEvent, FC, useState} from "react";
import { RequestState, RequestStateType, UsersInformationMonitoring } from "@components/api/types/UsersInformationMonitoring";
import { Button, Select, Textarea } from "@geist-ui/core";
import styles from "@styles/pages/dashboard.module.css";
import useApi from "@hooks/useTransportLayer";
import useModal from "@hooks/useModal";
import { promiseToast } from "@components/commons/promiseToast";


interface ModalChangePremiumStatusProps {
    user : UsersInformationMonitoring,
    updateUser : (user : UsersInformationMonitoring) => void
}

export const ModalChangePremiumStatus : FC<ModalChangePremiumStatusProps> = ({user,updateUser}) =>
{
    const api = useApi();
    const {handleModal} = useModal();
    const [currentState, setCurrentState] = useState<RequestStateType>(user.premiumState);
    const [adminComment, setAdminComment] = useState("");

    const changeRequestState = () => {

        promiseToast(
            api.user.changeUserRequestState({
                email: user.email,
                response: currentState,
                adminComment: adminComment
            }),
            {
                success: "État du premium changé",
                error: "Erreur lors du changement de l'état du premium",
                pending : "Changement de l'état du premium en cours"
            }
        ).then((_ : any) => {
            user.premiumState = currentState;
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
                    <Select onChange={(value) => setCurrentState(value as RequestStateType)} placeholder="Status">
                        {
                            Object.values(RequestState).map((state, index) => {
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
                height={10}
                width="100%" />
            <Button onClick={changeRequestState} className={styles.modal_button} width="100%"  type="secondary">Changer le status</Button>
        </div>
        </>
    );
}
