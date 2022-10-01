import { NgModule } from '@angular/core';
import { WINDOW } from 'src/app/utils/token';

@NgModule({
  providers: [
    { provide: Window, useValue: window },
    { provide: WINDOW, useValue: window },
  ],
})
export class TestModule {}
