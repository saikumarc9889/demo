import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { EnvConfigurationService } from "../../envConfiguration.service";
import { Env } from "../../env";

@Component({
    selector:'app-base',
    template:''
})
export class AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {

    private _renderTime!:number;

    protected onAdded():void{}
    protected onRemoved():void {}
    protected onRendered():void{}

    protected myEnv!:Env
    constructor(private env:EnvConfigurationService) {
        this.myEnv = env.configuration
    }

    ngOnInit(): void {
        this.onAdded()
    }

    ngAfterViewInit(): void {
        this._renderTime = window.setTimeout(() => {
            clearTimeout(this._renderTime)
            this.onRendered()
        })
    }

    ngOnDestroy(): void {
        this.onRemoved()
    }
}