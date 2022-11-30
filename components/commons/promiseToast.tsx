import { toast, ToastPosition } from "react-toastify";

export interface ToastOptions {
    pending: string;
    success: string;
    error: string;
}

export const promiseToast = async (promise: Promise<any>, option: ToastOptions, toastPosition : ToastPosition = toast.POSITION.TOP_CENTER) => 
{
    return toast.promise(
        promise,
        {
           pending: {
               render: () => <div>{option.pending}</div>,
           },
           success: {
               render: () => <div style={{"textAlign" : "center"}}>{option.success}</div>,
           },
           error: {
               render: ({data}) => {
                    if (!data.response.data )
                        return <div style={{"textAlign" : "center"}}>{option.error}</div>;
                    return <>{data.response.data.errors.map((error : string, idx: number) => {
                        return <p style={{"textAlign" : "center"}} key={idx}>{error}</p>
                    })}</>
               } ,
           },
        },
        {
            position: toastPosition,
        }
    )

}
