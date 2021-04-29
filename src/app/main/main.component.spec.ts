import { Observable } from 'rxjs';
import { UserAccountRepository } from './../base/repositories/user-account.repository';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from './components/components.module';

import { MainComponent } from './main.component';
import { of } from 'rxjs';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    const mock: any = {};
    mock.userAccounts = of([]);
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [{ provide: UserAccountRepository, useValue: mock }],
      imports: [
        ComponentsModule, RouterTestingModule, MatIconModule, MatButtonModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
