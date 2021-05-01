import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss'],
})
export class TitlebarComponent implements OnInit {
  @HostBinding('class.is-window-frame') isWindowFrame = true;

  constructor() {}

  ngOnInit(): void {}
}
