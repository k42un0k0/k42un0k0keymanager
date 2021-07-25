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
  autoFocus = false;

  @Input()
  label!: string;

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  type$ = new BehaviorSubject<'password' | 'text' | undefined>(undefined);
  @Input()
  set type(v: 'password' | 'text' | undefined) {
    this.type$.next(v);
  }

  showPassword$ = new BehaviorSubject<boolean>(false);

  currentType$ = combineLatest([this.type$, this.showPassword$]).pipe(
    map(([t, s]) => {
      if (t !== 'password') return t;
      return s ? 'text' : t;
    })
  );

  toggleShowPassword() {
    this.showPassword$.next(!this.showPassword$.value);
  }

  focus(): void {
    this.input.nativeElement.focus();
  }

  /**
   * ControlValueAccessor
   */

  value = '';
  disabled = false;

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

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
