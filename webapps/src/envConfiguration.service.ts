import { Injectable } from "@angular/core";
import { Env } from "./env";

@Injectable({
    providedIn:'root'
})
export class EnvConfigurationService {
    public configuration!:Env
}