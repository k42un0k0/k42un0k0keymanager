import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../base/services/authentication.service';
import { ElectronService, WindowEnum } from '../base/services/electron.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private electronService: ElectronService) {}

  ngOnInit(): void {
    this.authenticationService.isSignedIn.subscribe((isSignedIn) => {
      (async () => {
        if (isSignedIn) {
          await this.electronService.openWindow(WindowEnum.main);
        } else {
          await this.electronService.openWindow(WindowEnum.auth);
        }
        this.electronService.closeWindow();
      })();
    });
  }
}
