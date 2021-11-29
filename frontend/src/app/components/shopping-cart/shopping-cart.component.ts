import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinishService } from '../finalize-order/finish.service';
import { Order } from '../finalize-order/order.model';
import { Product } from '../product/product.model';
import { HeaderService } from '../template/header/header.service';
import { ShoppingCarService } from './shopping-car.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  total: number = 0;
  products: Product[] = [];
  products2: Product = {};
  order: Order = {};
  isPresent: boolean = false;

  constructor(
    private shoppingCarService: ShoppingCarService,
    private finishService: FinishService,
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Cart',
      icon: 'shopping_cart',
      routeUrl: '/cart',
    };
  }

  ngOnInit(): void {
    this.shoppingCarService.read().subscribe((product) => {
      this.products = product;

      if (product.length !== 0) {
        this.totalCart(this.products);
        this.isPresent = true;
      }
    });

    this.isPresent = false;
  }

  updateProduct(id: number): void {
    this.products.map((product) => {
      if (id === product.id && product.qtd! >= 1) {
        this.products2 = {
          id: product.id,
          qtd: product.qtd,
        };
      }
    });
    this.shoppingCarService.update(this.products2).subscribe(() => {});
  }

  sum(id: number): void {
    this.products.map((product) => {
      if (id === product.id) {
        product.qtd!++;
        if (product.qtd! > 1) {
          this.total += +product.price!;
          this.updateProduct(product.id!);
        }
      }
    });
  }

  subtraction(id: number): void {
    this.products.map((product) => {
      if (id === product.id && product.qtd! > 1) {
        product.qtd!--;
        this.total -= +product.price!;
        this.updateProduct(product.id!);
      }
    });
  }

  totalCart(products: Product[]): void {
    let itemPrice = 0;

    products.map((item, index) => {
      products.map((product, i) => {
        if (index === i) {
          if (item.id === product.id && product.qtd! > 1) {
            itemPrice += product.qtd! * product.price!;
          } else {
            itemPrice += product.price!;
          }
        }
      });
    });

    this.total = itemPrice;
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  post(): void {
    (this.order = {
      timestamp: new Date(),
      total: this.total,
      products: this.products,
    }),
      this.finishService.create(this.order).subscribe(() => {
        this.router.navigate(['/order']).then(() => window.location.reload());
      });
  }

  deleteCart(): void {
    this.products.map((item) => {
      this.shoppingCarService.delete(item).subscribe((element) => {
        this.shoppingCarService.showMessage("All items in your cart have been successfully deleted!!!");
        window.location.reload();
        
        this.products = element;
      })
    })
  } 
}
