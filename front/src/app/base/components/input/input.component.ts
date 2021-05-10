import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  disabled!: boolean;

  @Input()
  autoFocus = false;

  @Input()
  label!: string;

  @Input()
  value!: string;

  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor() {}

  focus(): void {
    this.input.nativeElement.focus();
  }
}
