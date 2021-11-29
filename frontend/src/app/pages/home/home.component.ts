import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';
import { ShoppingCarService } from 'src/app/components/shopping-cart/shopping-car.service';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isPresent: boolean = false;
  products: Product[] = [];
  product: Product = {};

  constructor(
    private productService: ProductService,
    private shoppingCarService: ShoppingCarService,
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Home',
      icon: 'home',
      routeUrl: '/',
    };
  }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;

      if (products.length !== 0) {
        this.isPresent = true;
      }
    });

    this.isPresent = false;
  }

  addToCart(item: Product) {
    let element: any;

    this.product = {
      id: item.id,
      name: item.name,
      price: +item.price!,
      qtd: item.qtd,
      description: item.description,
      image: item.image!,
    };

    this.shoppingCarService.add(this.product).subscribe(
      () => {
        setTimeout(() => {
          this.router.navigate(['/cart']).finally(() => {
            window.location.reload();
          });
        }, 1000);
      },
      (error) => {
        if (error) {
          this.shoppingCarService.readById(item.id!).subscribe((product) => {
            element = product;

            if (item.id === element.id) {
              this.product = {
                id: element.id,
                qtd: element.qtd! + 1,
              };

              this.shoppingCarService.update(this.product).subscribe(() => {
                setTimeout(() => {
                  this.router.navigate(['/cart']);
                }, 1000);
              });
            }
          });
        }
      }
    );
  }
}
