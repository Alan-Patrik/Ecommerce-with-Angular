import { HeaderService } from './header.service';
import { Product } from 'src/app/components/product/product.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingCarService } from '../../shopping-cart/shopping-car.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  product: Product[] = [];

  constructor(
    private headerService: HeaderService,
    private shoppingCarService: ShoppingCarService
  ) {}

  ngOnInit(): void {
    this.shoppingCarService.read().subscribe((product) => {
      this.product = product;
    });
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl;
  }
}
