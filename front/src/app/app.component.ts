import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import parse from 'csv-parse';
import { routeAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    parse('1,2,3', (_, r) => {
      console.log(r);
    });
  }
  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  clickImport() {
    console.log('import');
  }
}
