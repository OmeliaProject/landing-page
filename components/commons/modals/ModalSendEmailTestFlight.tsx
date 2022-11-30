import { ChangeEvent, FC, useState} from "react";
import { RequestState, RequestStateType, UsersInformationMonitoring } from "@components/api/types/UsersInformationMonitoring";
import { Button, Select, Textarea } from "@geist-ui/core";
import styles from "@styles/pages/dashboard.module.css";
import useApi from "@hooks/useTransportLayer";
import useModal from "@hooks/useModal";
import { promiseToast } from "@components/commons/promiseToast";

interface ModalSendEmailTestFlightProps {
    user : UsersInformationMonitoring,
    updateUser : (user : UsersInformationMonitoring) => void
}

export const ModalSendEmailTestFlight : FC<ModalSendEmailTestFlightProps> = ({user,updateUser}) =>
{
    const api = useApi();
    const {handleModal} = useModal();
    const [currentState, setCurrentState] = useState<RequestStateType>(user.testFlightState);
    const [adminComment, setAdminComment] = useState("");

    const changeRequestState = () => {

        promiseToast(
            api.user.changeUserRequestState({
                email: user.email,
                response: currentState,
                adminComment: adminComment
            }),
            {
                success: "L'email de confirmation a été envoyé",
                error: "Erreur lors du changement de l'état test flight",
                pending : "Changement de l'état test flight en cours"
            }
        ).then((_ : any) => {
            user.testFlightState = currentState;
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
                    <label>Statut:</label>
                    <Select onChange={(value) => setCurrentState(value as RequestStateType)} placeholder="Statut">
                        {
                            Object.values(RequestState).map((state, index) => {
                                return <Select.Option key={index} disabled={state == user.testFlightState ? true : false} value={state}>{state}</Select.Option>
                            })
                        }
                    </Select>
                </div>
            </div>
            <Textarea
                value={adminComment}
                onChange={(e : ChangeEvent<HTMLTextAreaElement>) => setAdminComment(e.target.value)}
                placeholder="Commentaire du changement de statut (Obligatoire dans le cas d'un refus)"
                height={10}
                width="100%" />
            <Button onClick={changeRequestState} className={styles.modal_button} width="100%"  type="secondary">Changer le statut</Button>
        </div>
        </>
    );
}
