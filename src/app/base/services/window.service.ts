import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  constructor() {}

  resizeTo(elm: ElementRef<HTMLElement>) {
    elm.nativeElement.style.display = 'block';
    const width = elm.nativeElement.clientWidth;
    const height = elm.nativeElement.clientHeight;
    window.resizeTo(width, height);
  }
}
