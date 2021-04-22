import { AfterContentInit, Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterContentInit {

  constructor(private elementRef: ElementRef) { }
  ngAfterContentInit(): void {
    this.elementRef.nativeElement.focus()
  }
}
