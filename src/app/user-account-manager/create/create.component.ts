import { APIService } from './../../API.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
  }
  username: string = "";
  password: string = "";
}
