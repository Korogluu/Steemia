export interface IUser {
    uid:         string;
    loading?:    boolean;
    error?:      string;
}

export class User implements IUser {
    constructor(public uid: string) {}
}