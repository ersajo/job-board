import { Component } from '@angular/core';
import { faArrowRightFromBracket, faBullseye, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  tachometerIcon = faTachometerAlt;
  exitIcon = faArrowRightFromBracket;
  opportunitiesIcon = faBullseye;

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
