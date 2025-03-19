import { Component } from '@angular/core';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,CatnavigationComponent,SideNavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
