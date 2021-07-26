import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export function AutoUnsubscribe<T extends new (...args: any[]) => { subscription: Subscription }>(target: T) {
  const _ngOnDestroy: OnDestroy['ngOnDestroy'] = target.prototype.ngOnDestroy ?? (() => {});
  target.prototype.ngOnDestroy = function ngOnDestroy(this: InstanceType<T>) {
    _ngOnDestroy.apply(this);
    this.subscription.unsubscribe();
  };
}
