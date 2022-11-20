import { Table, Loading, Button, Text } from '@geist-ui/core';
import useApi from '@hooks/useTransportLayer';
import {FC, useEffect, useState} from 'react';
import styles from '@styles/pages/dashboard.module.css';
import { PremiumState, PremiumStateType, UserWithPendingPremium } from '@components/api/types/UserWithPendingPremium';
import { transformTypeToString } from '@components/commons/useful';
import useModal from '@hooks/useModal';
import { ModalChangePremiumStatus } from '@components/commons/modals/ModalChangePremiumStatus';

const UsersTable: FC = () => {
    const api = useApi();
    const [users, setUsers] = useState<UserWithPendingPremium[] | undefined>(undefined);
    const { handleModal } = useModal();

    useEffect(() => {
        api.currentUser.getUsersWithPendingPremium().then((users) => {
            setUsers(users);
        });
    }, []);

    const updateUser = (user : UserWithPendingPremium) => {
        setUsers(users?.map((u) => {
            if(u.email == user.email) {
                return user;
            }
            return u;
        }));
    }

    const renderModifyState = (_ : any, rowData: UserWithPendingPremium, __: number) => {
        return (
            <Button 
                onClick={() => handleModal(<ModalChangePremiumStatus updateUser={updateUser} user={rowData} />)}
                type="secondary" 
                auto 
                scale={1/3}
                font="12px"
            >
                Modifier
            </Button>
        )
    }

    const renderPremiumState = (value : any, rowData: UserWithPendingPremium, __: number) => {
        switch(value as PremiumStateType) {
            case PremiumState.PENDING:
                return <Text type="warning">En attente</Text>
            case PremiumState.APPROVED:
                return <Text type="success">Approuvé</Text>
            case PremiumState.DENIED:
                return <Text type="error">Refusé</Text>
            case PremiumState.NOT_REQUESTED:
                return <Text type="secondary">Non demandé</Text>
        }

    } 
    
    return (
        <div className={styles.table_container}>
            {
                users ? 
                <Table<UserWithPendingPremium> emptyText="None" data={users}>
                    <Table.Column<UserWithPendingPremium> prop="email" label="Email" />
                    <Table.Column<UserWithPendingPremium> prop="firstname" label="Prenom" />
                    <Table.Column<UserWithPendingPremium> prop="lastname" label="Nom" />
                    <Table.Column<UserWithPendingPremium> prop="isAdmin" label="Admin"  render={transformTypeToString}/>
                    <Table.Column<UserWithPendingPremium> prop="premiumState" label="Etat" render={renderPremiumState} />
                    <Table.Column<any> prop="operation" label="action" width={150} render={renderModifyState} />
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