import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'base-cmp',
    template: '<div></div>',
})
export class BaseComponent implements OnInit, OnDestroy, AfterViewInit {

    private _renderTimer!: number;

    protected onAdded(): void { }
    protected onRemoved(): void { }
    protected onRendered(): void { }
    protected onCheck(): void { }

    ngOnInit(): void {
        this.onAdded();
    }

    ngAfterViewInit(): void {
        this._renderTimer = window.setTimeout(() => {
            clearTimeout(this._renderTimer);
            this.onRendered();
        });

    }

    ngOnDestroy(): void {
        this.onRemoved();
    }


    
}