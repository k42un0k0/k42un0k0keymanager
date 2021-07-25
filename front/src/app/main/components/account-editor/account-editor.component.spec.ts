import { discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AccountEditorComponent } from './account-editor.component';
import { IconService } from 'src/app/base/electron/icon.service';
import { OuterAccountRepository } from 'src/app/base/repositories/outer-account.repository';
import { ComponentsModule } from 'src/app/main/components/components.module';
import { mockOuterAccount, mockUserAccount } from 'src/app/test/model';
import { TestModule } from 'src/app/test/test.module';
import { OuterAccount, UserAccount } from 'src/models';

describe('main/components/AccountEditorComponent', () => {
  async function setup() {
    return render(AccountEditorComponent, {
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
      imports: [ComponentsModule, TestModule, MatDialogModule],
      excludeComponentDeclaration: true,
    });
  }

  it('should create', async () => {
    const container = await setup();

    expect(container.fixture.componentInstance).toBeTruthy();
  });

  it.skip('generate password', async () => {
    await setup();
    const passwordGeneratableSwitch = screen.getByLabelText('パスワードを自動で生成する');

    expect(screen.findByText('生成する')).not.toBeInTheDocument();

    await userEvent.click(passwordGeneratableSwitch);
    const generateButton = screen.getByText('生成する');
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    const value = passwordInput.value;
    await userEvent.click(generateButton);

    expect(passwordInput.value).not.toBe(value);
  });
  it('fetch favicon path', fakeAsync(async () => {
    const getFromUrlSpy = jest.fn().mockReturnValue(Promise.resolve('https://k42un0k0.com/favicon.ico'));
    const container = await render(AccountEditorComponent, {
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: IconService,
          useValue: {
            getFromUrl: getFromUrlSpy,
          },
        },
      ],
      imports: [ComponentsModule, TestModule, MatDialogModule],
      excludeComponentDeclaration: true,
    });
    const iconImg = screen.getByAltText('provider icon') as HTMLImageElement;
    const linkInput = screen.getByLabelText('Link') as HTMLInputElement;
    expect(iconImg.src).toBe('http://localhost/');
    await userEvent.type(linkInput, 'https://k42un0k0.com');
    tick(1000);
    container.detectChanges();

    expect(iconImg.src).toBe('https://k42un0k0.com/favicon.ico');
  }));
  it('make a form editable', async () => {
    await render(AccountEditorComponent, {
      excludeComponentDeclaration: true,
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { outerAccountID: 'outerAccountID', userAccount: new UserAccount({ name: '', OuterAccounts: [] }) },
        },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
      imports: [ComponentsModule, TestModule, MatDialogModule],
    });

    const providerNameInput = screen.getByLabelText('Provider Name');
    const userIdInput = screen.getByLabelText('User ID');
    const passwordInput = screen.getByLabelText('Password');
    const linkInput = screen.getByLabelText('Link');

    expect(providerNameInput).toBeDisabled();
    expect(userIdInput).toBeDisabled();
    expect(passwordInput).toBeDisabled();
    expect(linkInput).toBeDisabled();

    const editButton = screen.getByTestId('editButton');

    await userEvent.click(editButton);

    expect(providerNameInput).toBeEnabled();
    expect(userIdInput).toBeEnabled();
    expect(passwordInput).toBeEnabled();
    expect(linkInput).toBeEnabled();
  });
  it('destroy outer account', async () => {
    const outerAccountRepository = {
      destroy: jest.fn(),
      get: jest.fn().mockReturnValue(Promise.resolve(mockOuterAccount())),
    };
    await render(AccountEditorComponent, {
      excludeComponentDeclaration: true,
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { outerAccountID: 'outerAccountID', userAccount: mockUserAccount() },
        },
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: OuterAccountRepository, useValue: outerAccountRepository },
      ],
      imports: [ComponentsModule, TestModule, MatDialogModule],
    });
    const deleteButton = screen.getByText('削除');
    await userEvent.click(deleteButton);

    expect(outerAccountRepository.destroy).toHaveBeenCalledTimes(1);
  });
  it.skip('create outer account', () => {});
  it.skip('update outer account', () => {});
});
