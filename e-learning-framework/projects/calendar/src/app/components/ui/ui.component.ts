import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { AppService } from '../../app.service';
import { BaseComponent } from '../baseComponent';

@Component({
  selector: 'cmp-ui',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.scss'
})
export class UiComponent extends BaseComponent {

  constructor(public service: AppService) {
    super();    
  }

  private resizeAppView = (): void => {
    let $calculatedHeight: number = 0;
    let $calculatedWidth: number = 0;
    let $appView: HTMLElement = document.getElementById('app-view')!;
    if($appView) {
      $appView.style.width = this.service.config?.settings.width + 'px';
      $appView.style.height = this.service.config?.settings.height + 'px';
    }

    if (this.service.config.settings.isScalable) {
      if (document.body.clientWidth < document.body.clientHeight) {
        $calculatedWidth = document.body.clientWidth;
        $calculatedHeight =
          document.body.clientWidth / this.service.appWidthHeightRatio;
        if ($calculatedHeight > document.body.clientHeight) {
          $calculatedWidth =
            this.service.appWidthHeightRatio * document.body.clientHeight;
          $calculatedHeight = document.body.clientHeight;
        }
      } else {
        $calculatedHeight = document.body.clientHeight;
        $calculatedWidth =
          this.service.appWidthHeightRatio * document.body.clientHeight;
        if ($calculatedWidth > document.body.clientWidth) {
          $calculatedHeight =
            document.body.clientWidth / this.service.appWidthHeightRatio;
          $calculatedWidth = document.body.clientWidth;
        }
      }

      if (
        ($calculatedWidth > this.service.config.settings.width ||
          $calculatedHeight > this.service.config.settings.height) &&
        !this.service.config.settings.scaleUP
      ) {
        $calculatedWidth = this.service.config.settings.width;
        $calculatedHeight = this.service.config.settings.height;
      }

      this.service.scaleX = $calculatedWidth / this.service.config.settings.width;
      this.service.scaleY =
        $calculatedHeight / this.service.config.settings.height;


      $appView.style.transform = `scale(${this.service.scaleX},${this.service.scaleY})`;

      $appView.style.left =
        (document.body.clientWidth - $calculatedWidth) / 2 + 'px';
      $appView.style.top =
        (document.body.clientHeight - $calculatedHeight) / 2 + 'px';
    } else {
      $calculatedWidth = this.service.config.settings.width
      $calculatedHeight = this.service.config.settings.height
      this.service.scaleX = $calculatedWidth / this.service.config.settings.width;
      this.service.scaleY =
        $calculatedHeight / this.service.config.settings.height;


      //$appView.style.transform = `scale(${this.service.scaleX},${this.service.scaleY})`;
      $appView.style.transform = 'translate(0,0)'
      $appView.style.left = '0px'

      $appView.style.top = '0px'

    }

  };


  public onResize = ($evt:any): void => {
    this.resizeAppView();
  };

  override onAdded(): void {
    super.onAdded();
    this.resizeAppView();
  }

}
