import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Tab } from 'src/app/main/services/tab.service';

export interface TabItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-tab',
  template: `
    <span>{{ tab.title }}</span>
    <mat-icon class="close" (click)="clickClose.emit()" aria-hidden="false" aria-label="close icon"> close </mat-icon>
  `,
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
