import { ElectronService } from './../../../base/services/electron.service';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { TabItem } from '../tab/tab.component';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit(): void {
  }

  @Input() tabItems!: TabItem[];

  @Output() onClickHome = new EventEmitter();

  _onClickHome() {
    this.onClickHome.emit();
  }
  closeWindow() {
    this.electronService.closeWindow();
  }
}
