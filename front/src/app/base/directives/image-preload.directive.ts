import { Directive, Input, HostBinding, HostListener, OnInit } from '@angular/core';
@Directive({
  selector: 'img[appDefault]',
})
export class ImagePreloadDirective {
  @Input() appDefault: string = '';

  @HostBinding('attr.src') @Input() src;

  @HostListener('error', ['$event']) _updateSrc(e: unknown) {
    console.log(e);
    this.src = this.appDefault;
  }
}
