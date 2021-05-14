import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountEditorComponent } from './account-editor.component';
import { ComponentsModule } from 'src/app/main/components/components.module';

describe('main/components/AccountEditorComponent', () => {
  let component: AccountEditorComponent;
  let fixture: ComponentFixture<AccountEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModule],
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
