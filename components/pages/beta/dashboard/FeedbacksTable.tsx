import { IFeedback } from '@components/api/types/IFeedback';
import { Table, Loading, Button } from '@geist-ui/core';
import useApi from '@hooks/useTransportLayer';
import {FC, useEffect, useState} from 'react';
import styles from '@styles/pages/dashboard.module.css';
import { timestampToDate, transformTypeToString } from '@components/commons/useful';
import { promiseToast } from '@components/commons/promiseToast';
import { toast } from 'react-toastify';


const FeedbacksTable: FC= () => {
    const api = useApi();
    const [feedbacks, setFeedbacks] = useState<IFeedback[] | undefined>(undefined);
    
    useEffect(() => {
        api.feedbacks.getFeedbacks().then((feedbacks : IFeedback[]) => {
            setFeedbacks(feedbacks);
        });
    }, [api.feedbacks]);

    const deleteFeedback = (id: number) => {
        promiseToast(
            api.feedbacks.deleteFeedback(id),
            {
                success: "Feedback deleted",
                error: "Error while deleting feedback",
                pending: "Deleting feedback..",
            }
            , toast.POSITION.BOTTOM_RIGHT
        ).then(() => {
            setFeedbacks(feedbacks?.filter((feedback) => feedback.id !== id));
        });
    };

    const renderDeleteButton = (_ : any, rowData: IFeedback, __: number) => {
        return (
          <Button type="error" auto scale={1/3} font="12px" onClick={() => deleteFeedback(rowData.id)}>Remove</Button>
        )
      }

    const renderTimestamp = (value: any, _: any, __:any)=> <>{timestampToDate(value as number)}</>

    return (
        <div className={`${styles.table_container} unselectable`}>
            {
                feedbacks ? 
                <Table<IFeedback> className="selectable" data={feedbacks}>
                    <Table.Column<IFeedback> prop="id" label="id" />
                    <Table.Column<IFeedback> prop="timestamp" label="date" render={renderTimestamp} />
                    <Table.Column<IFeedback> prop="title" label="title" />
                    <Table.Column<IFeedback> prop="body" label="body" />
                    <Table.Column<IFeedback> prop="likes" label="likes" render={transformTypeToString} />
                    <Table.Column<any> prop="operation" label="action" width={150} render={renderDeleteButton} />
                </Table>
                :
                <Loading>loading</Loading>
            }
        </div>
    );
};

export {
    FeedbacksTable
}