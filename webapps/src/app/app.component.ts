import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { AppBaseComponent } from './shared/appBaseComponent';
import { EnvConfigurationService } from '../envConfiguration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone:false,
  template: '<div></div>',
  styleUrl: './app.component.scss'
})
export class AppComponent extends AppBaseComponent {
  title = 'webapps';

  _routerEvents!:Subscription;

  constructor(private $env:EnvConfigurationService,private activatedRoute:ActivatedRoute,private router:Router) {
    super($env);
  }

  protected override onAdded(): void {
    super.onAdded();
    this.routerListener();
    let $token=JSON.parse(String(localStorage.getItem(this.myEnv.LOCAL_STORAGE_TOKEN)));
    console.log("token",$token)
  }

  private routerListener = (): void => {
    this._routerEvents = this.router.events.subscribe((event: Event) => {
        let loading: boolean;
        if (event instanceof NavigationStart) {
            loading = true;
            console.log('...this.myEnvironment...AppComponent..', this.myEnv.defaultApp);
            if (event.url === '/') {
                this.router.navigate([this.myEnv.defaultApp], { skipLocationChange: !this.myEnv.showURL });
            }
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
            loading = false;
        }
    });
}
}
