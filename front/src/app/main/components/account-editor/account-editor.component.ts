import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { debounceTime, mergeMap, map, catchError } from 'rxjs/operators';

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
      console.log({ v });
      return this.http.get(v).pipe(
        map((response) => {
          console.log(response);
        }),
        catchError((e) => {
          return new BehaviorSubject('');
        })
      );
    })
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onChangeLink(v: string): void {
    console.log(v);
    this.link = v;
    this.iconSubject.next(v);
  }
}
