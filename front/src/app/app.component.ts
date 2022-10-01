import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import parse from 'csv-parse';
import { routeAnimations } from './animations';

@Component({
  selector: 'app-root',
  template: `
    <div style="height: 100%; overflow: hidden;" [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
