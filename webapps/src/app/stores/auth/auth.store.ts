
export const AUTH_STORE_NAME = 'LDS Auth Store';

export interface IAuthStore {
    loginCredential?:LoginCredential
    token?:string;
}

export interface LoginCredential {
    email:string|undefined
}

const empty: IAuthStore = {

}

export const initialAuthStoreValue: IAuthStore = empty;