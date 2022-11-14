import { NextPage } from "next";
import Head from "next/head";
import { GeistProvider, CssBaseline, Tabs, Text } from '@geist-ui/core'

import styles from "@styles/pages/monitoring.module.css";

import { NavbarBeta } from "@components/commons/NavbarBeta";
import { useEffect, useState } from "react";
import { IFeedback } from "@components/api/types/IFeedback";
import useApi from "@hooks/useTransportLayer";
import { ModalFeedback } from "@components/commons/modals/ModalFeeback";
import useModal from "@hooks/useModal";

const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
};

interface MonitoringProps {
}
 
const Monitoring : NextPage<MonitoringProps> = () => {

    // all feedbacks from the api
    const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
    const { handleModal } = useModal();
    const api = useApi();

    // useEFfect to get all feedbacks
    useEffect(() => {
        api.feedbacks.getFeedbacks().then((feedbacks) => {
            setFeedbacks(feedbacks);
        });
    }, [api.feedbacks]);

    const deleteFeedback = (id: number) => {
        api.feedbacks.deleteFeedback(id).then(() => {
            setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
        });
    };

    return (
        <>
            <Head>
                <title>{"Omelia - monitoring"}</title>
            </Head>
            <GeistProvider>
                <CssBaseline />
                <Tabs  initialValue="1" align="center" leftSpace={0}>
                    <Tabs.Item  label={<> Twitch TV</>} value="1">
                        <Text mt={0}>Hello, this is our live broadcast on Twitch.</Text>
                    </Tabs.Item>
                    <Tabs.Item label={<>Twitter </>} value="2">
                        <Text mt={0}>The Components of React looks very cool.</Text>
                    </Tabs.Item>
                </Tabs>
            </GeistProvider>
        </>
    );

}

export {
    Monitoring
}