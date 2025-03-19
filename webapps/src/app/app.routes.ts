import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [];

export const CommonRouter:Routes = [
    {
        path:'home',
        loadComponent:() => import('./apps/home/home.component').then(c=>c.HomeComponent)
    }
]

export function CustomRouters($isSSO?:boolean,$isUnderMaintaince?:boolean,$onLevel5?:boolean):Routes {
    if($isUnderMaintaince) {
        return [
            {
                path:'pmo',
                loadComponent:() => import('./shared/under-maintaince/under-maintaince.component').then(c=>c.UnderMaintainceComponent)
            }
        ]
    }

    if($isSSO == true && $onLevel5 == true) {

    } else if ($isSSO == true) {

    } else if($isSSO == false) {
        return [
            {
                path:'pmo-login',
                loadComponent:() => import('./shared/pmo-login/pmo-login.component').then(c=>c.PmoLoginComponent)
            },
            {
                path:'pmo',
                canActivateChild: [AuthGuard],
                data: {
                    preload: true,
                    noAuth: 'pmo-login',
                    noAccess: 'pmo'
                },
                loadChildren:() => import('./apps/pmo/pmo.module').then(m=>m.PmoModule)
            },
            ...CommonRouter,
            {
                path:'**',
                loadComponent:() => import('./shared/page-not-found/page-not-found.component').then(c=>c.PageNotFoundComponent)
            } 
        ]
    }


    return [

    ]
}
