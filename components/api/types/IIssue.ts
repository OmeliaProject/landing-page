export default interface IIssue {
    id : number;
    timestamp : number;
    email : string;
    title : string;
    body : string;
    likes : number;
    hasLiked : boolean;
}