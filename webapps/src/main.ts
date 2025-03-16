import { bootstrapApplication } from '@angular/platform-browser';
import {  AppModule } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InjectionToken } from '@angular/core';
import { Env } from './env';
import { LocalModule } from './app/local/local.module';

export const APP_CONFIG = new InjectionToken<Env>('app.config');

function fetchConfigFile(url:string):Promise<Env> {
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.setRequestHeader('Content-Type','application/json');

    xhr.onload = () => {
      if(xhr.status === 200) {
        const configData = JSON.parse(xhr.responseText)
        resolve(configData)
      } else {
        reject(`Request failed with status: ${xhr.status}`)
      }
    };

    xhr.onerror = () => {
      reject('Network error occured')
    }

    xhr.send();
  })
}

fetchConfigFile('./config.json').then(($env:Env) => {
  if($env.hostOn.toLowerCase() == 'prod') {

  } else if ($env.hostOn.toLowerCase() === 'stage') {

  } else {
    platformBrowserDynamic([{provide:APP_CONFIG,useValue:$env}]).bootstrapModule(LocalModule)
  }
}).catch((err) => console.log(err))



  
