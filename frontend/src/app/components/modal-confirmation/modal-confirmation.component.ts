import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { ShoppingCarService } from '../shopping-cart/shopping-car.service';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss'],
})
export class ModalConfirmationComponent implements OnInit {
  products: Product = {};

  constructor(
    private shoppingCarService: ShoppingCarService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.readById(id).subscribe((product) => {
      this.products = product;
    });
  }

  deleteProduct(): void {
    if (this.products.id) {
      this.shoppingCarService.delete(this.products).subscribe(() => {
        this.router.navigate(['/cart']).then(() => window.location.reload());
      });
    }
  }

  cancel(): void {
    this.router.navigate(['./cart']);
  }
}
