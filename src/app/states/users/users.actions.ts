import { IUser } from "../../models/users.model";





export class GetUsers {
    static readonly type = '[Users] Get User';
    constructor () {}
}


export class DeleteUser {
    static readonly type = '[Users] Delete User';
    constructor (public id: string) {}
}


export class UpdateUser {
    static readonly type = '[Users] Update User';
    constructor (public id: string, public data: IUser) {}
}


export class SelectUser {
    static readonly type = '[Users] Select User';
    constructor (public data: IUser) {}
}
