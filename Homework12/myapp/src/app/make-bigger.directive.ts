import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {
  private size:number=14;

  constructor(private element:ElementRef,private renderer:Renderer2) { }
  @HostListener('dblclick') ondblclick(){
    this.size+=2;
    this.renderer.setStyle(this.element.nativeElement,'font-size',`${this.size}px`);
  }

}
