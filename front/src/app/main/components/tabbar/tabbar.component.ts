import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output } from '@angular/core';
import { CsvService } from 'src/app/base/electron/csv.service';
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
    public tabService: TabService,
    private csvService: CsvService
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
  export() {
    this.csvService.parse('1,2,3').then((r) => {
      console.log(r);
    });
  }
}
