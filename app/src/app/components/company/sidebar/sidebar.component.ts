import { Component } from '@angular/core';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  tachometerIcon = faTachometerAlt;
}
