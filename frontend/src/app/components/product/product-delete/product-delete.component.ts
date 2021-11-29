import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateFormService } from '../../shared/template-form.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {};

  constructor(
    private productService: ProductService,
    public formService: TemplateFormService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    if (this.product.id) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.productService.showMessage('Successfully deleted product!');
        this.router.navigate(['/products']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['./products'])
  }
}
