import { Component, ElementRef, forwardRef, Input, Provider, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

const MAT_APP_INPUT_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [MAT_APP_INPUT_CONTROL_VALUE_ACCESSOR],
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
  name!: string;

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  _type = new BehaviorSubject<'password' | 'text' | undefined>(undefined);
  @Input()
  set type(v: 'password' | 'text' | undefined) {
    this._type.next(v);
  }

  showPassword = new BehaviorSubject<boolean>(false);

  currentType = combineLatest([this._type, this.showPassword]).pipe(
    map(([t, s]) => {
      if (t !== 'password') return t;
      return s ? 'text' : t;
    })
  );

  focus(): void {
    this.input.nativeElement.focus();
  }

  toggleShowPassword() {
    this.showPassword.next(!this.showPassword.value);
  }

  /**
   * ControlValueAccessor
   */

  value!: string;

  onChange?: (value: string) => void;

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // this._onTouched = fn;
  }
}
