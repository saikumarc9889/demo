export interface Env {
    hostOn:'local' | 'stage' | 'production';
    hit_URL:string;
    hosted_url:string;
    defaultApp:string;
    showURL:string;
    LOCAL_STORAGE_TOKEN:string;
    AUTH_API:string;
}