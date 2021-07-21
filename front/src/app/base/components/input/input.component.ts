import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';

const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  disabled!: boolean;

  @Input()
  autoFocus = false;

  @Input()
  label!: string;

  @Input()
  value!: string;

  @Input()
  name!: string;

  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  @Input()
  set type(v: string) {
    this._type.next(v);
  }

  _type = new BehaviorSubject<string | undefined>(undefined);

  show = new BehaviorSubject<boolean>(false);

  inputType: string | undefined;
  _controlValueAccessorChangeFn?: (value: string) => void;

  toggleShow(e: MouseEvent) {
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
  valueAccessor: ControlValueAccessor;

  constructor() {
    this.valueAccessor = this;
    combineLatest([this._type, this.show]).subscribe(([t, s]) => {
      this.inputType = s ? undefined : t;
    });
  }
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
    // this._onTouched = fn;
  }

  focus(): void {
    this.input.nativeElement.focus();
  }
  change(value: string) {
    this._controlValueAccessorChangeFn && this._controlValueAccessorChangeFn(value);
  }
}
