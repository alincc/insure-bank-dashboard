

export interface IuserUpdate {
    id: string;
    data: IUser;
}


export interface IUser {
    _id?: string;
    name?: string;
    network?: string;
    phone?: string;
    idNumber?: string;
    idType?: string;
    dateOfBirth?: string;
    address?: string;
    securityPin?: string;
    blocked?: boolean;
    email?: string;
    createdAt?: string;
    updatedAt?: string;
}



export class UserModel implements IUser {

        _id: string;
        address: string;
        blocked: boolean;
        dateOfBirth: string;
        email: string;
        idNumber: string;
        idType: string;
        name: string;
        network: string;
        phone: string;
        securityPin: string;
        updatedAt: string;
        createdAt: string;


        constructor (user: IUser) {
            this._id = user._id;
            this.address = user.address;
            this.blocked = user.blocked;
            this.dateOfBirth = user.dateOfBirth;
            this.email = user.email;
            this.idNumber = user.idNumber;
            this.idType = user.idType;
            this.name = user.name;
            this.network = user.network;
            this.phone = user.phone;
            this.securityPin = user.securityPin;
            this.createdAt = user.createdAt;
            this.updatedAt = user.updatedAt;

        }


}