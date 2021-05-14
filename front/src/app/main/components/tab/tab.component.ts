import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Tab } from 'src/app/main/services/tab.service';

export interface TabItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() tab!: Tab;

  @Output() clickClose = new EventEmitter();

  constructor() {}

  @HostBinding('class.active')
  get active(): boolean {
    return this.tab.active;
  }
}
