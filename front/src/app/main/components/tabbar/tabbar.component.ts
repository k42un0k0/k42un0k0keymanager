import { ElectronService } from '../../../base/services/electron.service';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { TabItem } from '../tab/tab.component';
import { TabService } from '../../services/tab.service';
import { AuthenticationService } from '../../../base/services/authentication.service';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss'],
})
export class TabbarComponent implements OnInit {
  @Output() clickHome = new EventEmitter();

  constructor(
    private electronService: ElectronService,
    private authenticationService: AuthenticationService,
    public tabService: TabService
  ) {}

  ngOnInit(): void {}

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
