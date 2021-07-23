import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { InputComponent } from './input.component';
import { BaseModule } from 'src/app/base/base.module';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [BaseModule],
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(InputComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should focus input', () => {
  //   component.focus();
  //   expect(document.activeElement).toBe(component.input.nativeElement);
  // });

  it('accept ngModel', fakeAsync(() => {
    // setup
    @Component({ template: `<app-input [(ngModel)]="value"></app-input>` })
    class ParentComponent {
      value = '';
    }
    TestBed.configureTestingModule({
      declarations: [ParentComponent],
      imports: [BaseModule, FormsModule],
    }).compileComponents();
    const parentFixture = TestBed.createComponent(ParentComponent);
    const parentComponent = parentFixture.componentInstance;
    // test
    parentComponent.value = 'hello';
    // MEMO: ngModelが２つネストしてるため２回tickを呼び出す
    parentFixture.detectChanges();
    tick();
    parentFixture.detectChanges();
    tick();

    const input = parentFixture.debugElement.query(By.css('input'));

    expect(input.nativeElement.value).toBe('hello');

    input.triggerEventHandler('input', { target: { value: 'world' } });

    expect(parentComponent.value).toBe('world');
  }));
});
