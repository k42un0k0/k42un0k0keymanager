import { APIService } from './../../API.service';
import { InputComponent } from '../components/input/input.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, pluck } from "rxjs/operators"
import { from, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private apiService: APIService) { }
  ngOnInit(): void {
  }

  private id = this.activatedRoute.params.pipe(pluck("id"))

  userAccount = this.id.pipe(mergeMap((id) => {
    return from(this.apiService.GetUserAccount(id));
  }))

  name = this.userAccount.pipe(pluck("name"))
  @ViewChild('input') input!: InputComponent;
  editing = false;

  onClickEdit() {
    this.editing = !this.editing;
    setTimeout(() => {
      this.input.focus();
    }, 0)
  }
}
