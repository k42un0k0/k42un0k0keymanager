import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../../../base/services/authentication.service';
import { ElectronService } from '../../../base/services/electron.service';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss'],
})
export class TabbarComponent {
  @Output() clickHome = new EventEmitter();

  constructor(
    private electronService: ElectronService,
    private authenticationService: AuthenticationService,
    public tabService: TabService
  ) {}

  _onClickHome(): void {
    this.clickHome.emit();
  }
  logout(): void {
    this.authenticationService.signOut();
  }
  closeWindow(): void {
    this.electronService.closeWindow();
  }
}
