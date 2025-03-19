import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiComponent } from './components/ui/ui.component';
import { BaseComponent } from './components/baseComponent';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [UiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent {
  title = 'calendar';

  constructor(private _service: AppService) {
    super();
  }

  protected override onRendered(): void {
      super.onRendered();
      console.log('AppComponent.onRendered()');
    this._service.startService();
  }
}
