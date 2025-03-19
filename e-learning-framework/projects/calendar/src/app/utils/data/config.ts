export class Config {
    framework!: Framework;
    settings!: BaseConfigSettings;
}

export interface Framework {
    id: string;
    name: string;
    layout: string;
    version: number;
    type: string;
}

export interface BaseConfigSettings {
    version: number;
    courseID: string;
    dbCode: string;
    autoUpdateInterval: number;
    setCompletionStatus: string;
    title: string;
    fontSize: string;
    debugMode: boolean;
    editMode: boolean;
    width: number;
    height: number;
    scaleUP: boolean;
    isScalable: boolean;
    layout: string;
    // preloadMode: PreloadMode;
    // appMode: AppMode;
    appPath: string
}