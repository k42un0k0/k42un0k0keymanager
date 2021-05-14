import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';

const slideIn = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
      opacity: 1,
    }),
  ]),
  query(':enter', [style({ right: '-100%' })]),
  group([
    query(':leave', [animate('300ms ease-out', style({ right: '30%', opacity: 0.5 }))]),
    query(':enter', [animate('300ms ease-out', style({ right: '0%' }))]),
  ]),
  query(':leave', animateChild()),
  query(':enter', animateChild()),
];

const slideOut = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
    }),
  ]),
  query(':enter', [style({ right: '30%', opacity: 0.5 })]),
  group([
    query(':enter', [animate('300ms ease-out', style({ right: '0%', opacity: 1 }))]),
    query(':leave', [animate('300ms ease-out', style({ right: '-100%' }))]),
  ]),
  query(':leave', animateChild()),
  query(':enter', animateChild()),
];
export const routeAnimations = trigger('routeAnimations', [
  transition('login => register', slideIn),
  transition('register => login', slideOut),
  transition('register => confirm', slideIn),
  transition('confirm => register', slideOut),
]);
