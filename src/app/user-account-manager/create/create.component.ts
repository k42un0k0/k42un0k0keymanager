import { ElectronService } from './../../base/services/electron.service';
import { APIService } from './../../API.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private apiService: APIService, private electronService: ElectronService) { }

  ngOnInit(): void {
  }
  name: string = "";
  password: string = "";

  submit() {
    this.apiService.CreateUserAccount({ name: this.name, token: "aaaaaa" }).then(() => {
      this.electronService.closeWindow();
    })
  }
}
