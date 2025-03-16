import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { CustomRouters, routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LocalComponent } from './local/local.component';

export const CommonConfig:NgModule = {
  declarations:[],
  providers:[],
  imports:[
    BrowserModule
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