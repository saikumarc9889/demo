import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBaseComponent } from './shared/appBaseComponent';

@Component({
  selector: 'app-root',
  standalone:false,
  template: '<div></div>',
  styleUrl: './app.component.scss'
})
export class AppComponent extends AppBaseComponent {
  title = 'webapps';
}
