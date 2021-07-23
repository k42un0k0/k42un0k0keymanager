import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { mocked } from 'ts-jest/utils';
import { Observable } from 'zen-observable-ts';
import { CreateComponent } from './create.component';
import { APIService } from 'src/app/API.service';
import { BaseModule } from 'src/app/base/base.module';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';
import { TestModule } from 'src/app/test/test.module';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let apiService: any = {};
  let userAccountRepository: any = {};
  let router: any = {};
  beforeEach(async () => {
    apiService.GetUserAccount = jest.fn(() => Promise.resolve(Observable.of()));
    userAccountRepository.create = jest.fn();
    router.navigate = jest.fn();
    await TestBed.configureTestingModule({
      declarations: [CreateComponent],
      providers: [
        { provide: APIService, useValue: apiService },
        { provide: Router, useValue: router },
        { provide: UserAccountRepository, useValue: userAccountRepository },
      ],
      imports: [RouterTestingModule, MatButtonModule, FormsModule, BaseModule, TestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create user account', () => {
    const nameInput = fixture.debugElement.query(By.css('[id="name"]'));
    const submitButton = fixture.debugElement.query(By.css('[type="submit"]'));
    nameInput.triggerEventHandler('input', { target: { value: 'user name' } });
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(userAccountRepository.create).toBeCalledTimes(1);
    const [model] = mocked<UserAccountRepository['create']>(userAccountRepository.create).mock.calls[0];
    expect(model.name).toEqual('user name');
  });
});
