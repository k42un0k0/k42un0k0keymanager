import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { BaseModule } from 'src/app/base/base.module';

import { TabbarComponent } from './tabbar.component';

describe('main/components/TabbarComponent', () => {
  let component: TabbarComponent;
  let fixture: ComponentFixture<TabbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabbarComponent],
      imports: [CommonModule, MatIconModule, BaseModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
