import { ElectronService } from 'src/app/base/services/electron.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { debounceTime, mergeMap, map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.scss'],
})
export class AccountEditorComponent implements OnInit {
  providerName = '';
  userId = '';
  password = '';
  link = '';
  iconSubject = new BehaviorSubject('');
  iconPath = this.iconSubject.pipe(
    debounceTime(1000),
    mergeMap((v) => {
      console.log({ v }, this.electronService.getFromUrl(v));
      return from(this.electronService.getFromUrl(v));
    }),
    tap((v) => {
      console.log(v);
    })
  );

  constructor(private http: HttpClient, private electronService: ElectronService) {}

  ngOnInit(): void {}

  onChangeLink(v: string): void {
    console.log(v);
    this.link = v;
    this.iconSubject.next(v);
  }
}
