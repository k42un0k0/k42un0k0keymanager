import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective implements AfterContentInit {
  @Input()
  appAutoFocus!: boolean | '';

  constructor(private elementRef: ElementRef<HTMLInputElement>) {}
  ngAfterContentInit(): void {
    if (this.appAutoFocus === '' || this.appAutoFocus === true) {
      this.elementRef.nativeElement.focus();
    }
  }
}
