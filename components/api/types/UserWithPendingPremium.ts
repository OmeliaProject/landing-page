enum PremiumState {
    APPROVED = "APPROVED",
    DENIED = "DENIED", 
    NOT_REQUESTED = "NOT_REQUESTED", 
    PENDING = "PENDING"
}

//  make a type as "APPROVED" | "DENIED" | "NOT_REQUESTED" | "PENDING"
type PremiumStateType = "APPROVED" | "DENIED" | "NOT_REQUESTED" | "PENDING";


interface Avatar {
    face: number,
    mouth: number,
    hair: number,
    accessory: number
}


interface UserConfig {
    avatar: Avatar,
}

interface UserWithPendingPremium
{
    email: string,
    firstname: string,
    lastname: string,
    isAdmin: boolean,
    premiumState: PremiumStateType,
    config: UserConfig
}

export {
    PremiumState,
    type PremiumStateType,
    type UserWithPendingPremium
}