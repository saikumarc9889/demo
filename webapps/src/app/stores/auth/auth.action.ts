import { Action } from "@ngrx/store";
import { AUTH_STORE_NAME, IAuthStore, LoginCredential } from "./auth.store";

export class AuthActionName{
    public static  AUTH_STORE_NAME = AUTH_STORE_NAME;

    public static  MANUAL_LOGIN:string=`[${this.AUTH_STORE_NAME}] MANUAL_LOGIN`;
    public static  MANUAL_LOGIN_SUCCESS:string=`[${this.AUTH_STORE_NAME}] MANUAL_LOGIN_SUCCESS`;
}

export class AuthAction implements Action {
    readonly type:string = '';
    public payload!:IAuthStore

}


export class Login extends AuthAction{
    override readonly type:string = AuthActionName.MANUAL_LOGIN;
    constructor(payload:LoginCredential){
        super();
        this.payload={...this.payload,loginCredential:payload}
       
        
    }
}

export class LoginSuccess extends AuthAction{
    override readonly type:string = AuthActionName.MANUAL_LOGIN_SUCCESS;
    constructor(token:string){
        super();
        this.payload={...this.payload,token:token}
        
    }
}