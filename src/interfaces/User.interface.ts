import { IProfile } from "./Propfile.interface";

export interface IUser {
    jwt: string | null,
    loginError?: string,
    profile?: IProfile

}