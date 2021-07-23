import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { AccountEditorComponent } from './account-editor.component';
import { ComponentsModule } from 'src/app/main/components/components.module';
import { TestModule } from 'src/app/test/test.module';
import { UserAccount } from 'src/models';

describe('main/components/AccountEditorComponent', () => {
  let component: AccountEditorComponent;
  let fixture: ComponentFixture<AccountEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
      imports: [ComponentsModule, TestModule, MatDialogModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it.todo('generate password');
  it.todo('fetch favicon path');
  it('make a form editable', fakeAsync(() => {
    // setup
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
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
    }).compileComponents();
    fixture = TestBed.createComponent(AccountEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tick();
    // test
    const providerNameInput = fixture.debugElement.query(By.css('input#providerName'));
    const userIdInput = fixture.debugElement.query(By.css('input#userId'));
    const passwordInput = fixture.debugElement.query(By.css('input#password'));
    const linkInput = fixture.debugElement.query(By.css('input#link'));

    expect(providerNameInput.nativeElement.disabled).toBe(true);
    expect(userIdInput.nativeElement.disabled).toBe(true);
    expect(passwordInput.nativeElement.disabled).toBe(true);
    expect(linkInput.nativeElement.disabled).toBe(true);

    const editButton = fixture.debugElement.query(By.css('[data-testid="editButton"]'));
    editButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    tick();

    expect(providerNameInput.nativeElement.disabled).toBe(false);
    expect(userIdInput.nativeElement.disabled).toBe(false);
    expect(passwordInput.nativeElement.disabled).toBe(false);
    expect(linkInput.nativeElement.disabled).toBe(false);

    discardPeriodicTasks();
  }));
  it.todo('destroy outer account');
  it.todo('create outer account');
  it.todo('update outer account');
});
