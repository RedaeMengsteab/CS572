import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
    <li> {{student.name}}    {{student.age}} </li>
  `,
  styles: []
})
export class DumpComponent  {
@Input() student;

  constructor() { }

  
  

}
