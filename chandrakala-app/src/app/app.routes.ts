import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() => import('./components/main/main.component').then(m => m.MainComponent),
    },
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'**',
        loadComponent:() => import('./shared/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
    }
];
