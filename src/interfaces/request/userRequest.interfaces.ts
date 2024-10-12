import { User } from "../user.interfaces";



export interface UserRegisterCredentials extends User{
    password: string;
    repeatPassword?: string;
}
export interface UserLoginCredentials {
    password: string;
    email: string;
}