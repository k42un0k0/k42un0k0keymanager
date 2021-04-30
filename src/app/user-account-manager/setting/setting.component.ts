import { InputComponent } from '../components/input/input.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, pluck } from "rxjs/operators"
import { from } from 'rxjs';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userAccountRepository: UserAccountRepository) { }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(pluck("id"), mergeMap((id) => {
      console.log(id)
      return from(this.userAccountRepository.get(id));
    })).subscribe((v) => {
      this.id = v.id;
      this.name = v.name;
      this._version = v._version;
    })
  }

  id!: string;
  name!: string;
  _version!: number;

  @ViewChild('input') input!: InputComponent;
  editing = false;

  onClickEdit() {
    if (this.editing) {
      this.userAccountRepository.update({ id: this.id, name: this.name, _version: this._version }).then((a) => {
        console.log(a)
      }).catch((a) => {
        console.log(a)
      })
    }
    this.editing = !this.editing;
    setTimeout(() => {
      this.input.focus();
    }, 0)
  }
}
