import { Product } from 'src/app/components/product/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss'],
})
export class ProductCrudComponent implements OnInit {
  products: Product[] = [];
  isPresent: boolean = false;
  constructor(
    private router: Router,
    private productService: ProductService,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Product',
      icon: 'storefront',
      routeUrl: '/products',
    };
  }

  ngOnInit(): void {
    this.productService.read().subscribe((product) => {
      this.products = product;

      if (product.length !== 0) {
        this.isPresent = true;
      }
    });

    this.isPresent = false;
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
