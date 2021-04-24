import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  focus() {
    this.input.nativeElement.focus();
  }

  @Input()
  disabled!: boolean;

  @Input()
  autoFocus = false;

  @Input()
  label!: string;

  @Input()
  value!: string;

  @Output() valueChange = new EventEmitter<string>();
}
