import { ElectronService, WindowEnum } from './../../../base/services/electron.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewChecked, ElementRef } from '@angular/core';
import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

export type SidebarItem = {
  title: string;
  onClick: () => void;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewChecked {
  @ViewChild('section') section!: ElementRef<HTMLDivElement>;
  @Input()
  sidebarItems!: Observable<SidebarItem[]>;
  @Input()
  open!: boolean;

  constructor(private elm: ElementRef<HTMLElement>, private electronService: ElectronService) {}
  ngAfterViewChecked(): void {
    if (this.open) {
      const width = this.section.nativeElement.clientWidth;
      this.elm.nativeElement.style.width = `${width}px`;
      this.elm.nativeElement.style.width = `${width}px`;
    } else {
      this.elm.nativeElement.style.width = '0px';
    }
  }

  ngOnInit(): void {}

  openUserAccountManager(): void {
    this.electronService.openWindow(WindowEnum.userAccountManager);
  }
}
