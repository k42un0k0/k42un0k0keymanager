import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, mergeMap, pluck } from 'rxjs/operators';
import { from } from 'rxjs';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';
import { InputComponent } from 'src/app/base/components/input/input.component';
import { UserAccount } from 'src/models';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  name!: string;
  model!: UserAccount;

  @ViewChild('input') input!: InputComponent;
  editing = false;

  constructor(private activatedRoute: ActivatedRoute, private userAccountRepository: UserAccountRepository) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        pluck('id'),
        mergeMap((id) => {
          console.log(id);
          return from(this.userAccountRepository.get(id));
        }),
        filter((v): v is UserAccount => !!v)
      )
      .subscribe({
        next: (v): void => {
          this.name = v.name;
          this.model = v;
        },
      });
  }

  onClickEdit(): void {
    if (this.editing && this.model) {
      this.userAccountRepository
        .update(this.model, (model) => {
          model.name = this.name;
        })
        .then((a) => {
          console.log(a);
        })
        .catch((a) => {
          console.log(a);
        });
    }
    this.editing = !this.editing;
    setTimeout(() => {
      this.input.focus();
    }, 0);
  }

  _DeleteAccount(): void {
    console.log(this);
    this.userAccountRepository.destroy(this.model);
  }
}
