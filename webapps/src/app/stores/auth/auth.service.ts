import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EnvConfigurationService } from "../../../envConfiguration.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient,private $env:EnvConfigurationService) {}

    

}