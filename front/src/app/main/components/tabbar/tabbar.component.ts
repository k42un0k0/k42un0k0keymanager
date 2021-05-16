import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output } from '@angular/core';
import { ElectronService } from 'src/app/base/electron/electron.service';
import { AuthenticationService } from 'src/app/base/services/authentication.service';
import { TabService } from 'src/app/main/services/tab.service';

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
    this.electronService.close();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tabService.tabs, event.previousIndex, event.currentIndex);
  }
}
