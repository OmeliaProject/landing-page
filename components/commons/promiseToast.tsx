import { toast } from "react-toastify";

export const promiseToast = async (promise: Promise<any>, message: string) => {

    return toast.promise(
        promise,
        {
           pending: {
               render: () => <div>Chargement ...</div>,
           },
           success: {
               render: () => <div style={{"textAlign" : "center"}}>{message}</div>,
           },
           error: {
               render: ({data}) => {
                    if (!data.response.data )
                        return <div style={{"textAlign" : "center"}}>Une erreur serveur survenue</div>;
                    return <>{data.response.data.errors.map((error : string, idx: number) => {
                        return <p style={{"textAlign" : "center"}} key={idx}>{error}</p>
                    })}</>
               } ,
           },
        },
        {
            position: toast.POSITION.TOP_CENTER,
        }
    )

}
