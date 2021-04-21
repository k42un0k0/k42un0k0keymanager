import { Component, OnInit, Input, EventEmitter, HostBinding } from '@angular/core';


export interface TabItem {
  title: string,
  link: string,
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostBinding('class.active') @Input() active!: boolean;

  @Input() tabItem!: TabItem;

}
