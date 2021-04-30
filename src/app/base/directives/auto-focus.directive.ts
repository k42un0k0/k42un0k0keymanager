import { AfterContentChecked, AfterContentInit, Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective implements AfterContentInit {
  constructor(private elementRef: ElementRef<HTMLInputElement>) {}
  ngAfterContentInit(): void {
    if (this.appAutoFocus === '' || this.appAutoFocus === true) {
      this.elementRef.nativeElement.focus();
    }
  }

  @Input()
  appAutoFocus!: boolean | '';
}
