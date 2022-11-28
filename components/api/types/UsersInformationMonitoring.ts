enum RequestState {
    APPROVED = "APPROVED",
    DENIED = "DENIED", 
    NOT_REQUESTED = "NOT_REQUESTED", 
    PENDING = "PENDING"
}

type RequestStateType = "APPROVED" | "DENIED" | "NOT_REQUESTED" | "PENDING";


interface Avatar {
    face: number,
    mouth: number,
    hair: number,
    accessory: number
}


interface UserConfig {
    avatar: Avatar,
}

interface UsersInformationMonitoring
{
    email: string,
    firstname: string,
    lastname: string,
    isAdmin: boolean,
    premiumState: RequestStateType,
    testFlightState: RequestStateType,

    config: UserConfig
}

export {
    RequestState,
    type RequestStateType,
    type UsersInformationMonitoring
}