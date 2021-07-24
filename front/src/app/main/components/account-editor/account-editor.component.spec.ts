import { discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AccountEditorComponent } from './account-editor.component';
import { ComponentsModule } from 'src/app/main/components/components.module';
import { TestModule } from 'src/app/test/test.module';
import { UserAccount } from 'src/models';

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

  it.todo('generate password');
  it.todo('fetch favicon path');
  it('make a form editable', fakeAsync(async () => {
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
    flush();

    expect(providerNameInput).toBeEnabled();
    expect(userIdInput).toBeEnabled();
    expect(passwordInput).toBeEnabled();
    expect(linkInput).toBeEnabled();
    //FIXME: iconの挙動は無視している
    discardPeriodicTasks();
  }));
  it.todo('destroy outer account');
  it.todo('create outer account');
  it.todo('update outer account');
});
