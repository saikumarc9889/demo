import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { manualLoginConfig } from '../app.config';
import { APP_CONFIG } from '../../main';
import { Env } from '../../env';
import { EnvConfigurationService } from '../../envConfiguration.service';

let manualConfig = manualLoginConfig()

@NgModule({
  declarations: manualConfig.declarations,
  imports: manualConfig.imports,
  bootstrap:manualConfig.bootstrap,
  providers:manualConfig.providers
})
export class LocalModule { 
  constructor(@Inject(APP_CONFIG) private configData:Env,private envSer:EnvConfigurationService){
    this.envSer.configuration = configData;
    console.log('ConfigData...',configData)
  }
}
