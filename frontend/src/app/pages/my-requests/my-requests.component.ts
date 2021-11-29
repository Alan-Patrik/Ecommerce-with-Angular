import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinishService } from 'src/app/components/finalize-order/finish.service';
import { Order } from 'src/app/components/finalize-order/order.model';
import { Product } from 'src/app/components/product/product.model';
import { ShoppingCarService } from 'src/app/components/shopping-cart/shopping-car.service';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss'],
})
export class MyRequestsComponent implements OnInit {
  isPresent: boolean = false;
  total: number = 0;
  order: Order = {};
  products: Product[] = [];
  displayedColumns = ['image', 'id', 'name', 'price', 'description', 'qtd'];

  constructor(
    private finishService: FinishService,
    private shoppingCarService: ShoppingCarService,
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'My requests',
      icon: 'shopping_basket',
      routeUrl: '/request',
    };
  }

  ngOnInit(): void {
    this.finishService.read().subscribe((order) => {
      this.order = order[0];

      if (order[0]) {
        this.totalCart();
        this.isPresent = true;
      }
    });

    this.isPresent = false;

    this.shoppingCarService.read().subscribe((product) => {
      this.products = product;
    });
  }

  totalCart(): void {
    this.total = this.order.total!;
  }

  cancel(): void {
    this.router.navigate(['/cart']);
  }

  finishOrder(order: Order): void {
    this.finishService.readById(+order.id!).subscribe((order) => {
      this.order = order;
      this.totalCart();
    });

    if (order.id) {
      this.products.map((product) => {
        this.shoppingCarService.delete(product).subscribe(() => {
          this.router.navigate(['/buy']);
        });
      });
    }
  }
}
