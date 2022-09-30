import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';
import { CreateComponent } from './create.component';
import { BaseModule } from 'src/app/base/base.module';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';
import { TestModule } from 'src/app/test/test.module';

describe('CreateComponent', () => {
  it('should create', async () => {
    const container = await render(CreateComponent, {
      imports: [RouterTestingModule, MatButtonModule, ReactiveFormsModule, BaseModule, TestModule],
    });
    expect(container.fixture.componentInstance).toBeTruthy();
  });

  it('create user account', async () => {
    let userAccountRepository: any = {};
    let router: any = {};
    userAccountRepository.create = jest.fn();
    router.navigate = jest.fn();

    await render(CreateComponent, {
      providers: [
        { provide: Router, useValue: router },
        { provide: UserAccountRepository, useValue: userAccountRepository },
      ],
      imports: [RouterTestingModule, MatButtonModule, ReactiveFormsModule, BaseModule, TestModule],
    });
    const nameInput = screen.getByLabelText('ユーザー名');
    const submitButton = screen.getByText('作成');
    await userEvent.type(nameInput, 'user name');
    await userEvent.click(submitButton);
    expect(userAccountRepository.create).toBeCalledTimes(1);
    const [model] = mocked<UserAccountRepository['create']>(userAccountRepository.create).mock.calls[0];
    expect(model.name).toEqual('user name');
  });
});
