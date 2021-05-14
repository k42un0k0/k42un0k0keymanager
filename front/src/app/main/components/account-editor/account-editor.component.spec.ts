import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AccountEditorComponent } from './account-editor.component';
import { TestModule } from 'src/app/__tests__/test.module';
import { ComponentsModule } from 'src/app/main/components/components.module';

describe('main/components/AccountEditorComponent', () => {
  let component: AccountEditorComponent;
  let fixture: ComponentFixture<AccountEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
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
});
