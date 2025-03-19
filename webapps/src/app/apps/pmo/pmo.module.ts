import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
    {
        path: '',
        loadComponent: () => import('./pmo.component').then(m => m.PmoComponent)
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})
export class PmoModule {

}