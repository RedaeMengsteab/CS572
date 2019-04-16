import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Counter<h2>
  Component Counter Value = {{componentCounterValue}}
  <counter [counter]="componentCounterValue" (counterChange)='change($event)' ></counter>
  `,
  styles: [`h2 {text-align: center}`]
})
export class AppComponent {
title = "Counter"
componentCounterValue:number = 1;
change(e){
  this.componentCounterValue = e;
}
}
