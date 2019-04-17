import { Component } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <ul [appIsVisible]="true">
    <app-dump *ngFor="let student of students" [student]='student'> </app-dump>
    </ul>
    <p appMakeBigger>Make my text bigger and bigger </p>
  `,
  styles: []
})
export class SmartComponent  {
  students=[{name:'Redae', age:30},{name:'Daniel', age:31},{name:'Semhar',age:29},{name:'Tomas',age:27}];

  constructor() { }

  
  

}
