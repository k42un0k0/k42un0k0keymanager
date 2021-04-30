import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from './components/components.module';
import { BaseModule } from '../base/base.module';

import { UserAccountManagerComponent } from './user-account-manager.component';
import { UserAccountRepository } from '../base/repositories/user-account.repository';

describe('UserAccountManagerComponent', () => {
  let component: UserAccountManagerComponent;
  let fixture: ComponentFixture<UserAccountManagerComponent>;

  beforeEach(async () => {
    const mockUserAccountRepository = jasmine.createSpyObj('UserAccountRepository', [], ['userAccounts']);
    mockUserAccountRepository.userAccounts = of([]);
    await TestBed.configureTestingModule({
      declarations: [UserAccountManagerComponent],
      providers: [{ provide: UserAccountRepository, useValue: mockUserAccountRepository }],
      imports: [RouterTestingModule, MatIconModule, MatButtonModule, BaseModule, ComponentsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
