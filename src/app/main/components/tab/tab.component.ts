import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Tab } from '../../services/tab.service';

export interface TabItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostBinding('class.active')
  get active() {
    return this.tab.active;
  }

  @Input() tab!: Tab;

  @Output() close = new EventEmitter();
}
