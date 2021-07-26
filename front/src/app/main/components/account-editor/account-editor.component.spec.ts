import { discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fireEvent, render, screen } from '@testing-library/angular';
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
        {
          provide: IconService,
          useValue: {
            getFromUrl: jest.fn().mockReturnValue(Promise.resolve('')),
          },
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

  it.skip('generate password', fakeAsync(async () => {
    await setup();
    const passwordGeneratableSwitch = screen.getByLabelText('パスワードを自動で生成する');

    expect(await screen.findByText('生成する')).not.toBeInTheDocument();

    await userEvent.click(passwordGeneratableSwitch);
    const generateButton = screen.getByText('生成する');
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    const value = passwordInput.value;
    await userEvent.click(generateButton);
    expect(passwordInput.value).not.toBe(value);
  }));
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
    const outerAccount = mockOuterAccount();
    await render(AccountEditorComponent, {
      excludeComponentDeclaration: true,
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { outerAccountID: outerAccount.id, userAccount: outerAccount.userAccount },
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
  it('create outer account', fakeAsync(async () => {
    const outerAccountRepository = {
      create: jest.fn().mockImplementation((v) => v),
    };
    const matDialogRef = { close: jest.fn() };
    const container = await render(AccountEditorComponent, {
      excludeComponentDeclaration: true,
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { userAccount: mockUserAccount() },
        },
        {
          provide: MatDialogRef,
          useValue: matDialogRef,
        },
        {
          provide: IconService,
          useValue: { getFromUrl: jest.fn().mockReturnValue(Promise.resolve('https://k42un0k0.com/favicon.ico')) },
        },
        { provide: OuterAccountRepository, useValue: outerAccountRepository },
      ],
      imports: [ComponentsModule, TestModule, MatDialogModule],
    });
    const providerNameInput = screen.getByLabelText('Provider Name');
    const userIdInput = screen.getByLabelText('User ID');
    const passwordInput = screen.getByLabelText('Password');
    const linkInput = screen.getByLabelText('Link');
    await userEvent.type(providerNameInput, 'password manager');
    await userEvent.type(userIdInput, 'Bob');
    await userEvent.type(passwordInput, 'foobar');
    await userEvent.type(linkInput, 'https://k42un0k0.com');
    tick(1000);
    container.detectChanges();

    expect(outerAccountRepository.create).toHaveBeenCalledTimes(0);
    expect(matDialogRef.close).toHaveBeenCalledTimes(0);

    const createButton = screen.getByText('保存');
    await userEvent.click(createButton);

    flush();

    expect(outerAccountRepository.create).toHaveBeenCalledTimes(1);
    const [model]: Parameters<OuterAccountRepository['create']> = outerAccountRepository.create.mock.calls[0];
    expect(model.providerName).toBe('password manager');
    expect(model.userId).toBe('Bob');
    expect(model.password).toBe('foobar');
    expect(model.link).toBe('https://k42un0k0.com');
    expect(model.iconPath).toBe('https://k42un0k0.com/favicon.ico');
    expect(matDialogRef.close).toHaveBeenCalledTimes(1);
  }));
  it('update outer account', fakeAsync(async () => {
    const outerAccount = mockOuterAccount();
    const outerAccountRepository = {
      get: jest.fn().mockReturnValue(Promise.resolve(outerAccount)),
      update: jest.fn(),
    };
    const container = await render(AccountEditorComponent, {
      excludeComponentDeclaration: true,
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { outerAccountID: outerAccount.id, userAccount: outerAccount.userAccount },
        },
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: IconService,
          useValue: { getFromUrl: jest.fn().mockReturnValue(Promise.resolve('https://k42un0k0.com/favicon.ico')) },
        },
        { provide: OuterAccountRepository, useValue: outerAccountRepository },
      ],
      imports: [ComponentsModule, TestModule, MatDialogModule],
    });
    const editButton = screen.getByText('編集');

    await userEvent.click(editButton);
    container.detectChanges();
    const providerNameInput = screen.getByLabelText('Provider Name');
    const userIdInput = screen.getByLabelText('User ID');
    const passwordInput = screen.getByLabelText('Password');
    const linkInput = screen.getByLabelText('Link');
    fireEvent.input(providerNameInput, { target: { value: 'password manager' } });
    container.detectChanges();
    expect((providerNameInput as HTMLInputElement).value).toBe('password manager');
    await userEvent.clear(userIdInput);
    await userEvent.type(userIdInput, 'Bob');
    flush();
    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, 'foobar');
    flush();
    fireEvent.input(linkInput, { target: { value: 'https://k42un0k0.com' } });
    container.detectChanges();
    tick();
    container.detectChanges();
    tick();
    container.detectChanges();
    tick();
    container.detectChanges();
    tick(1000);
    container.detectChanges();

    expect(outerAccountRepository.update).toHaveBeenCalledTimes(0);

    const createButton = screen.getByText('保存');
    await userEvent.click(createButton);

    expect(outerAccountRepository.update).toHaveBeenCalledTimes(1);
    const [model, mutator]: Parameters<OuterAccountRepository['update']> = outerAccountRepository.update.mock.calls[0];
    const newModel = OuterAccount.copyOf(model, mutator);
    expect(newModel.providerName).toBe('password manager');
    expect(newModel.userId).toBe('Bob');
    expect(newModel.password).toBe('foobar');
    expect(newModel.link).toBe('https://k42un0k0.com');
    expect(newModel.iconPath).toBe('https://k42un0k0.com/favicon.ico');
    tick();
    container.detectChanges();
    tick();
    container.detectChanges();
    expect(providerNameInput).toBeDisabled();
    expect(userIdInput).toBeDisabled();
    expect(passwordInput).toBeDisabled();
    expect(linkInput).toBeDisabled();
    flush();
    discardPeriodicTasks();
  }));
});
