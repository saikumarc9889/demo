import { ActionReducerMap } from "@ngrx/store";
import { AuthAction } from "./auth/auth.action";
import { AUTH_STORE_NAME } from "./auth/auth.store";

import * as authStore from './auth/auth.store';
import { authReducer } from "./auth/auth.reducer";

export interface IAppStore {
    [AUTH_STORE_NAME]:authStore.IAuthStore;
}

export interface IAppActions {
    [AUTH_STORE_NAME]:AuthAction;
}

export const appReducer: ActionReducerMap<IAppStore,AuthAction> = {   
    [AUTH_STORE_NAME]:authReducer,
} 