import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {
  isPresent: boolean = false;
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'description', 'action'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      
      if (products.length !== 0) {
        this.isPresent = true;
      }
    });

    this.isPresent = false;
  }
}
