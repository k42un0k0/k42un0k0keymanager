import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  constructor() { }
  closeWindow() {
    window.main.close();
  }
}
