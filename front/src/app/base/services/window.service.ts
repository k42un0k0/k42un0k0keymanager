import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  constructor(private window: Window) {}

  resizeTo(elm: ElementRef<HTMLElement>): void {
    elm.nativeElement.style.display = 'block';
    const width = elm.nativeElement.offsetWidth - (window.innerWidth - window.outerWidth);
    const height = elm.nativeElement.offsetHeight - (window.innerHeight - window.outerHeight);
    this.window.resizeTo(width, height);
  }
}
