import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'zen-observable-ts';
import { SettingComponent } from './setting.component';
import { APIService } from 'src/app/API.service';
import { BaseModule } from 'src/app/base/base.module';
import { TestModule } from 'src/app/test/test.module';

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;

  beforeEach(async () => {
    const mockApiServie: any = {};
    mockApiServie.GetUserAccount = jest.fn(() => Promise.resolve(Observable.of()));
    await TestBed.configureTestingModule({
      declarations: [SettingComponent],
      providers: [{ provide: APIService, useValue: mockApiServie }],
      imports: [RouterTestingModule, MatButtonModule, FormsModule, BaseModule, TestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
