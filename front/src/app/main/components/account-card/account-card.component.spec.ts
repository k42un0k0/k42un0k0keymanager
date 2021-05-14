import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { OuterAccount, UserAccount } from 'src/models';
import { AccountCardComponent } from './account-card.component';

describe('main/components/AccountCardComponent', () => {
  let component: AccountCardComponent;
  let fixture: ComponentFixture<AccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountCardComponent],
      imports: [MatIconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCardComponent);
    component = fixture.componentInstance;
    component.account = new OuterAccount({
      providerName: 'Twitter',
      iconPath: '',
      userId: 'k42un0k0',
      link: '',
      password: '',
      userAccount: new UserAccount({ name: 'aaa', token: 'aaas', OuterAccounts: [] }),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
