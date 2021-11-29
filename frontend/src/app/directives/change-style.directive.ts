import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]',
})
export class ChangeStyleDirective {
  
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b';
  }
}
