import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'cmp-layout',
  imports: [SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
