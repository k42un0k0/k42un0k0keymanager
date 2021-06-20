import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-auth-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  label!: string;

  @Input()
  value!: string;

  @Input()
  set type(v: string) {
    this._type.next(v);
  }

  _type = new BehaviorSubject<string | undefined>(undefined);

  show = new BehaviorSubject<boolean>(false);

  inputType: string | undefined;

  toggleShow() {
    this.show.next(!this.show.value);
  }

  @Output() valueChange = new EventEmitter<string>();
  constructor() {
    combineLatest([this._type, this.show]).subscribe(([t, s]) => {
      this.inputType = s ? undefined : t;
    });
  }
}
