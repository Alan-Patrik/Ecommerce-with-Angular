import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Product } from '../components/product/product.model';

@Directive({
  selector: '[myFor]',
})
export class MyForDirective implements OnChanges {
  @Input('myForEm') arrayObjects: Product[] = [];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnChanges(): void {
    for (let array of this.arrayObjects) {
      this.container.createEmbeddedView(this.template, { $implicit: array });
    }
  }
}
