import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { mocked } from 'ts-jest/utils';
import { Observable } from 'zen-observable-ts';
import { SettingComponent } from './setting.component';
import { APIService } from 'src/app/API.service';
import { BaseModule } from 'src/app/base/base.module';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';
import { TestModule } from 'src/app/test/test.module';
import { UserAccount } from 'src/models';

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;
  let mockApiServie: any = {};
  let userAccountRepository: any = {};
  beforeEach(async () => {
    mockApiServie.GetUserAccount = jest.fn(() => Promise.resolve(Observable.of()));
    userAccountRepository.update = jest.fn();
    await TestBed.configureTestingModule({
      declarations: [SettingComponent],
      providers: [
        { provide: APIService, useValue: mockApiServie },
        { provide: UserAccountRepository, useValue: userAccountRepository },
      ],
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

  it('update user account', async () => {
    // setup
    component.editing = true;
    component.model = new UserAccount({ name: '', OuterAccounts: [] });
    fixture.detectChanges();
    // test
    const nameInput = fixture.debugElement.query(By.css('[id="name"]'));
    const submitButton = fixture.debugElement.query(By.css('[type="submit"]'));
    nameInput.triggerEventHandler('input', { target: { value: 'user name' } });
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(userAccountRepository.update).toBeCalledTimes(1);
    const [model, mutator] = mocked<UserAccountRepository['update']>(userAccountRepository.update).mock.calls[0];
    const newModel = UserAccount.copyOf(model, mutator);
    expect(newModel.name).toEqual('user name');
  });
});
