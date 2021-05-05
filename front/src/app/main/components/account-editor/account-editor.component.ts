import { ElectronService } from 'src/app/base/services/electron.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { debounceTime, mergeMap, map } from 'rxjs/operators';
import { UrlUtils } from 'src/app/base/utils/url';

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
      return from(this.electronService.getFromUrl(v));
    }),
    map(UrlUtils.complementProtocol)
  );

  constructor(private electronService: ElectronService) {}

  ngOnInit(): void {}

  onChangeLink(v: string): void {
    console.log(v);
    this.link = v;
    this.iconSubject.next(v);
  }
}
