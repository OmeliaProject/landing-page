import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { GeistProvider, CssBaseline, Tabs, } from '@geist-ui/core'

import styles from "@styles/pages/dashboard.module.css";

import { FeedbacksTable } from "./FeedbacksTable";
import { useState } from "react";
import Link from "next/link";
import { UsersTable } from "./UsersTable";

enum TableType {
    Feedbacks = "Feedbacks",
    Users = "Users"
}

interface DashboardProps {
    initialTable : TableType
} 

const Dashboard : NextPage<DashboardProps> = ({initialTable}) => {


    const tables : Map<TableType, JSX.Element> = new Map([
        [TableType.Feedbacks, <FeedbacksTable key={0} />],
        [TableType.Users, <UsersTable key={1} />]
    ]);
    const [currentTable, setCurrentTable] = useState<TableType>(initialTable);

    const handleChange = (table : string) => {
        setCurrentTable(table as TableType);
        window.history.pushState({}, "", `?table=${table}`);
    }

    return (
        <>
            <Head>
                <title>{"Omelia - Dashboard"}</title>
            </Head>
            <GeistProvider>
                <CssBaseline />

                <div className={styles.navbar}>
                    <Link passHref href="/beta">
                        <div  className={styles.home_button}>
                            <img src="/omelia.svg" alt="logo" />
                            <p>Omelia - Dashboard</p>
                        </div>
                    </Link>
                    <Tabs className={styles.menu} align="center" hideDivider initialValue={initialTable} onChange={handleChange}>
                        <Tabs.Item label="Feedbacks" value={TableType.Feedbacks} />
                        <Tabs.Item label="Users" value={TableType.Users} />
                    </Tabs>
                </div>
                { tables.get(currentTable) }
            </GeistProvider>
        </>
    );



}

Dashboard.getInitialProps = async (ctx : NextPageContext) => {
    
    const isTableType = (query: string): query is TableType => {
        return Object.values(TableType).includes(query as TableType);
    }

    const table = ctx.query.table as string ;
    const initialTable = isTableType(table) ? table : TableType.Feedbacks;
    
    return {initialTable};
}


export {
    Dashboard
}