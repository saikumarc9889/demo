import { AuthAction, AuthActionName } from "./auth.action";
import { IAuthStore, initialAuthStoreValue } from "./auth.store";
import {jwtDecode} from 'jwt-decode';

export function authReducer($store: IAuthStore | undefined=initialAuthStoreValue, $action: AuthAction):IAuthStore {
    switch ($action.type) {
        case AuthActionName.MANUAL_LOGIN:
                //console.log('Login..Reducer.MANUAL_LOGIN..',$action.payload);
                return {
                    ...$store,
                    loginCredential: $action.payload.loginCredential,
                   
                    
                };
                break;
        case  AuthActionName.MANUAL_LOGIN_SUCCESS:
            //console.log('Login..Reducer.MANUAL_LOGIN_ERROR..',$action.payload.authError);
            const decoded = jwtDecode<any>(String($action.payload.token)); // Returns with the JwtPayload type
            console.log('Login..Reducer...decoded...',decoded);


            return {
                ...$store,                
                // activeUser:decoded.client? decoded.client : trimObject(decoded.lds),
                // currentData:decoded.currentData,
                // loginBy:decoded.client? 'client' : decoded.lds ? 'lds' : 'guest',
                token:$action.payload.token,
                // incharge:trimObject(decoded.incharge)
            };
            break;
            default:
                return $store;
        }
}