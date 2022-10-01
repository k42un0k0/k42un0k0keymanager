import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';
import { TabbarComponent } from './tabbar.component';
import { BaseModule } from 'src/app/base/base.module';
import { TabComponent } from 'src/app/main/components/tabbar/tab.component';
import { TestModule } from 'src/app/test/test.module';

describe('main/components/TabbarComponent', () => {
  let component: TabbarComponent;
  let fixture: ComponentFixture<TabbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabbarComponent, TabComponent],
      imports: [CommonModule, MatIconModule, MatMenuModule, BaseModule, TestModule],
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
