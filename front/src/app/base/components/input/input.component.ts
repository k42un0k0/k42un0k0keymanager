import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
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

  @Input()
  set type(v: string) {
    this._type.next(v);
  }

  _type = new BehaviorSubject<string | undefined>(undefined);

  show = new BehaviorSubject<boolean>(false);

  inputType: string | undefined;

  toggleShow(e: MouseEvent) {
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
    // @ts-ignore
    var ae = document.activeElement;
    setTimeout(function () {
      // @ts-ignore
      ae.focus();
    }, 1);
    this.show.next(!this.show.value);
  }

  constructor() {
    combineLatest([this._type, this.show]).subscribe(([t, s]) => {
      console.log(t, s);
      this.inputType = s ? undefined : t;
    });
  }

  focus(): void {
    this.input.nativeElement.focus();
  }
}
