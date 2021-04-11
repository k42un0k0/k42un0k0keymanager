import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'k42un0k0passwordmanager';
  callDebug() {
    window.main.debug();
  }
  openAuthWindow() {
    window.main.window.auth();
  }
}
