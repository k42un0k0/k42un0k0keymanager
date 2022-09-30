import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';
import { SettingComponent } from './setting.component';
import { BaseModule } from 'src/app/base/base.module';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';
import { mockUserAccount } from 'src/app/test/model';
import { TestModule } from 'src/app/test/test.module';
import { UserAccount } from 'src/models';

describe('SettingComponent', () => {
  it('should create', async () => {
    const container = await render(SettingComponent, {
      imports: [RouterTestingModule, MatButtonModule, ReactiveFormsModule, BaseModule, TestModule],
    });
    expect(container.fixture.componentInstance).toBeTruthy();
  });

  it('update user account', async () => {
    const userAccountRepository: any = {};
    userAccountRepository.get = jest.fn().mockReturnValue(Promise.resolve(mockUserAccount()));
    userAccountRepository.update = jest.fn();
    await render(SettingComponent, {
      providers: [{ provide: UserAccountRepository, useValue: userAccountRepository }],
      imports: [RouterTestingModule, MatButtonModule, ReactiveFormsModule, BaseModule, TestModule],
    });
    // test
    const editButton = screen.getByText('編集');
    await userEvent.click(editButton);
    const nameInput = screen.getByLabelText('ユーザー名');
    const submitButton = screen.getByText('保存');
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'user name');
    await userEvent.click(submitButton);
    expect(userAccountRepository.update).toBeCalledTimes(1);
    const [model, mutator] = mocked<UserAccountRepository['update']>(userAccountRepository.update).mock.calls[0];
    const newModel = UserAccount.copyOf(model, mutator);
    expect(newModel.name).toEqual('user name');
  });
});
