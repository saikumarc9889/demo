import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { CustomRouters, routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LocalComponent } from './local/local.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './stores/app.store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const filteredStoreDevtoolsOptions: any = {
  name: 'LDS PMO',
  maxAge: 135,
  // logOnly: environment.production,
  //monitor: filterActionsMiddleware,
  /* actionSanitizer: (action: Action) => {
    return actionsToHide.includes(action.type) ? { ...action, type: 'FILTERED_ACTION' } : action;
  }, */
};

export const CommonConfig:NgModule = {
  declarations:[],
  providers:[],
  imports:[
    BrowserModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument(filteredStoreDevtoolsOptions),
  ],
  bootstrap:[]
}

export function manualLoginConfig():NgModule {
  return {
    declarations:[
      ...(CommonConfig.declarations ? CommonConfig.declarations : []),
      LocalComponent
    ],
    providers:[
      ...(CommonConfig.providers ? CommonConfig.providers : [])
    ],
    imports:[
      ...(CommonConfig.imports ? CommonConfig.imports : []),
      RouterModule.forRoot(CustomRouters(false))
    ],
    bootstrap:[LocalComponent]
  }
}



@NgModule({
  declarations: [
    AppComponent  // Declare all components used within this module
  ],
  imports: [
    BrowserModule,  // Import core Angular modules like BrowserModule
    HttpClientModule,  // Import any other modules like HttpClientModule
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstraps the root component to load the application
})
export class AppModule { }