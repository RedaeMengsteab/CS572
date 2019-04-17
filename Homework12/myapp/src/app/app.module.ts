import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DumpComponent } from './dump.component';
import { SmartComponent } from './smart.component';
import { MakeBiggerDirective } from './make-bigger.directive';
import { IsVisibleDirective } from './is-visible.directive';

@NgModule({
  declarations: [
    AppComponent,
    DumpComponent,
    SmartComponent,
    MakeBiggerDirective,
    IsVisibleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
