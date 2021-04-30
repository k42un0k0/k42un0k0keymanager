import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterAccountListComponent } from './outer-account-list.component';

describe('main/OuterAccountListComponent', () => {
  let component: OuterAccountListComponent;
  let fixture: ComponentFixture<OuterAccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OuterAccountListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
