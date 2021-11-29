import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateFormService } from '../../shared/template-form.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
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

  onSubmit() {
    if (this.formService.form.valid) {
      this.formService.updateProduct(this.formService.form.value, this.product);
      this.formService.form.reset();
      this.formService.initializeFormGroup();
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
