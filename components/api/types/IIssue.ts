export interface IIssue {
    id : number;
    timestamp : number;
    isOwner : boolean;
    title : string;
    body : string;
    likes : number;
    hasLiked : boolean;
}
