import { NextPage } from "next";
import Head from "next/head";
import { GeistProvider, CssBaseline, Tabs, } from '@geist-ui/core'

import styles from "@styles/pages/dashboard.module.css";

import { FeedbacksTable } from "./FeedbacksTable";
import { useState } from "react";
import Link from "next/link";
import { UsersTable } from "./UsersTable";


interface DashboardProps {
}



enum TableType {
    Feedbacks = "Feedbacks",
    Users = "Users"
}


const Dashboard : NextPage<DashboardProps> = () => {
    const tables : Map<TableType, JSX.Element> = new Map([
        [TableType.Feedbacks, <FeedbacksTable key={0} />],
        [TableType.Users, <UsersTable key={1} />]
    ]);
    const [currentTab, setCurrentTab] = useState<TableType>(TableType.Feedbacks);

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
                    <Tabs className={styles.menu} align="center" hideDivider initialValue="0" onChange={(value : any) => setCurrentTab(value)}>
                        <Tabs.Item label="Feedbacks" value={TableType.Feedbacks} />
                        <Tabs.Item label="Users" value={TableType.Users} />
                    </Tabs>
                </div>
                { tables.get(currentTab) }
            </GeistProvider>
        </>
    );

}

export {
    Dashboard
}