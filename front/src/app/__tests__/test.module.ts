import { NgModule } from '@angular/core';

@NgModule({
  providers: [{ provide: Window, useValue: window }],
})
export class TestModule {}
