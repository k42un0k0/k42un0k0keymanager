import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoFocusDirective } from './auto-focus.directive';

@Component({
  template: `
    <h2 appAutoFocus>Something Yellow</h2>
    <h2 [appAutoFocus]="true">The Default (Gray)</h2>
    <h2 [appAutoFocus]="false">No Highlight</h2>
    <h2>No Highlight</h2>
  `,
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
});
