import { element } from 'protractor';
import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit{
  ngOnInit():void{
    let visibility;
    if(this.appIsVisible){
      visibility='block';
    }
    else{
      visibility='none';
    }
    this.renderer.setStyle(this.element.nativeElement,'display',visibility)
  }
  @Input() appIsVisible

  constructor(private element:ElementRef,private renderer:Renderer2) { }

}
