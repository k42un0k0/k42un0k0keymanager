import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AutoFocusDirective } from './auto-focus.directive';

@Component({
  template: `<input data-testid="focused" appAutoFocus value="hello" />`,
})
class TestComponent {}

describe('AutoFocusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, AutoFocusDirective],
    }).createComponent(TestComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('focus a input', () => {
    expect(document.activeElement).toBe(fixture.debugElement.query(By.css("[data-testid='focused']")).nativeElement);
  });
});
