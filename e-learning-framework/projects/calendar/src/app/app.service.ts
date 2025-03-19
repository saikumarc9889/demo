import { Injectable } from '@angular/core';
import { Config } from './utils/data/config';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private _config!: Config;
  public get config(): Config {
    return this._config;
  }

  private _configFile: string = './config.json';

  public set configFile(value: string) {
    this._configFile = value;
  }
  public get configFile(): string {
    return this._configFile;
  }

  // private _baseConfig: BaseConfig;
  // public get baseConfig(): BaseConfig {
  //   return this._baseConfig;
  // }

  private _scaleX: number = 0;
  public get scaleX(): number {
    return this._scaleX;
  }
  public set scaleX(value: number) {
    this._scaleX = value;
  }

  private _scaleY: number = 0;
  public get scaleY(): number {
    return this._scaleY;
  }
  public set scaleY(value: number) {
    this._scaleY = value;
  }

  public get appWidthHeightRatio(): number {
    return this.config.settings.width / this.config.settings.height;
  }

  startService = (): void => {
    if (this.configFile.includes('.json')) {
      this._config = plainToClass(Config, this.configFile)
    } else {
       console.log('JS...', JSON.parse(this.configFile));

      this._config = plainToClass(Config, JSON.parse(this.configFile))
    }
  }
}
