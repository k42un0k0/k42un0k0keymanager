import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewChecked, ElementRef } from '@angular/core';
import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';

export type SidebarItem = {
  title: string,
  link: string,
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewChecked {

  constructor(private elm: ElementRef<HTMLElement>) { }
  ngAfterViewChecked(): void {
    console.log(this)
    if (this.open) {
      const width = this.section.nativeElement.clientWidth;
      this.elm.nativeElement.style.width = `${width}px`;
      this.elm.nativeElement.style.width = `${width}px`;
    }
    else {
      this.elm.nativeElement.style.width = "0px";
    }
  }

  ngOnInit(): void {
  }
  @ViewChild('section') section!: ElementRef<HTMLDivElement>;
  @Input()
  sidebarItems!: SidebarItem[];
  @Input()
  open!: boolean;
}
