import { AuthenticationService } from '../base/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  logout() {
    console.log("logout");
    this.authenticationService.signOut();
  }
}
