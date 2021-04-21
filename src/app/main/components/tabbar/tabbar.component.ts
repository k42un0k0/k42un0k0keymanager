import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { TabItem } from '../tab/tab.component';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tabItems!: TabItem[];

  @Output() onClickHome = new EventEmitter();

  _onClickHome() {
    this.onClickHome.emit();
  }
  closeWindow() {
    window.close()
  }
}
