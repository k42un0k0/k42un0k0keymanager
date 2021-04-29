import { ElectronService } from './../../../base/services/electron.service';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { TabItem } from '../tab/tab.component';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  constructor(private electronService: ElectronService, public tabService: TabService) { }

  ngOnInit(): void {
  }

  @Output() onClickHome = new EventEmitter();

  _onClickHome() {
    this.onClickHome.emit();
  }
  closeWindow() {
    this.electronService.closeWindow();
  }
}
