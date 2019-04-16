import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
  <div id = "btn">
    <button type="button" class= "btn" (click) ='decreement()' >-</button> <label id = cv>{{ counterValue }}</label><button type="button" class= "btn" (click) ='increement()' >+</button>
  </div>

  `,
  styles: [`#cv {font-size: 30px}`, `#btn {text-align: center}`,`.btn{font-size:20px}`]
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {
    this.counterValue = this.counter;
  }

  counterValue = 0;
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();
  constructor() { }
  decreement() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue)
    this.counter = this.counterValue;
  }
  increement() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue)
    this.counter = this.counterValue;
  }

}
