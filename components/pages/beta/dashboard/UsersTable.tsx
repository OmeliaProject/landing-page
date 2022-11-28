import { Table, Loading, Button, Text } from '@geist-ui/core';
import useApi from '@hooks/useTransportLayer';
import {FC, useEffect, useState} from 'react';
import styles from '@styles/pages/dashboard.module.css';
import { RequestState, RequestStateType, UsersInformationMonitoring } from '@components/api/types/UsersInformationMonitoring';
import { transformTypeToString } from '@components/commons/useful';
import useModal from '@hooks/useModal';
import { ModalChangePremiumStatus } from '@components/commons/modals/ModalChangePremiumStatus';
import { ModalSendEmailTestFlight } from '@components/commons/modals/ModalSendEmailTestFlight';

const UsersTable: FC = () => {
    const api = useApi();
    const [users, setUsers] = useState<UsersInformationMonitoring[] | undefined>(undefined);
    const { handleModal } = useModal();

    useEffect(() => {
        api.currentUser.getAllUsers().then((users : UsersInformationMonitoring[]) => {
            setUsers(users);
        });
    }, []);

    const updateUser = (user : UsersInformationMonitoring) => {
        setUsers(users?.map((u) => {
            if(u.email == user.email) {
                return user;
            }
            return u;
        }));
    }

    const tansformStateIntoJSXElement = (value : RequestStateType) => {
        let element : JSX.Element = <>Inconnue</>;

        switch(value) {
            case RequestState.PENDING:
                element = <Text type="warning">En attente</Text>
                break;
            case RequestState.APPROVED:
                element = <Text type="success">Approuvé</Text>
                break;
            case RequestState.DENIED:
                element = <Text type="error">Refusé</Text>
                break;
            case RequestState.NOT_REQUESTED:
                element = <Text type="secondary">Non demandé</Text>
                break;
        }

        return element;
    } 

    const renderPremium = (value : any, rowData : UsersInformationMonitoring) => {
        const stateJsxELement = tansformStateIntoJSXElement(value as RequestStateType);
        return (
            <div
                className={"clickable"}
                onClick={() => handleModal(<ModalChangePremiumStatus user={rowData} updateUser={updateUser} />)}
            >
                {stateJsxELement}
            </div>
        );
    }

    const renderTestFlight = (value : any, rowData : UsersInformationMonitoring) => {
        const stateJsxELement = tansformStateIntoJSXElement(value as RequestStateType);
        return (
            <div
                className={"clickable"}
                onClick={() => handleModal(<ModalSendEmailTestFlight user={rowData} updateUser={updateUser} />)}
            >
                {stateJsxELement}
            </div>
        );
    }
    
    return (
        <div className={`${styles.table_container} unselectable`}>
            {
                users ? 
                <Table<UsersInformationMonitoring> className="selectable" emptyText="None" data={users}>
                    <Table.Column<UsersInformationMonitoring> prop="email" label="Email" />
                    <Table.Column<UsersInformationMonitoring> prop="firstname" label="Prenom" />
                    <Table.Column<UsersInformationMonitoring> prop="lastname" label="Nom" />
                    <Table.Column<UsersInformationMonitoring> prop="isAdmin" label="Admin"  render={transformTypeToString}/>
                    <Table.Column<UsersInformationMonitoring> prop="premiumState" label="Etat" render={renderPremium} />
                    <Table.Column<UsersInformationMonitoring> prop="testFlightState" label="testFlight" render={renderTestFlight} />
                </Table>
                :
                <Loading>loading</Loading>
            }
        </div>
    );
};

export {
    UsersTable
}