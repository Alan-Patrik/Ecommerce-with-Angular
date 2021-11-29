import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { RegisterService } from '../register/register.service';
import { User } from '../register/user.model';

@Injectable({
  providedIn: 'root',
})
export class TemplateFormService {
  form: FormGroup;
  formLogin: FormGroup;

  product: Product = {};
  products: Product[] = [];

  username: User = {
    email: '',
    password: '',
  };

  user: User = {
    email: '',
    password: '',
    rolesId: [
      {
        id: 2,
        name: 'visitorUser',
        permissionId: [
          {
            id: 2,
            name: 'user',
          },
        ],
      },
    ],
  };

  constructor(
    private productService: ProductService,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl(this.product.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(this.product.description, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      image: new FormControl(this.product.image, [
        Validators.required,
        Validators.minLength(5),
      ]),
      price: new FormControl(this.product.price, Validators.required),
    });

    this.formLogin = new FormGroup({
      email: new FormControl(this.username.email, [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
        ),
      ]),
      password: new FormControl(this.username.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  initializeFormGroup() {
    this.form.setValue({
      name: '',
      description: '',
      image: '',
      price: null,
    });
  }

  initializeFormGroupLogin() {
    this.formLogin.setValue({
      email: '',
      password: '',
    });
  }

  createProduct(product: Product) {
    this.product = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      qtd: 1,
    };

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Successfully created product!');
      this.router.navigate(['/products']);
    });
  }

  updateProduct(product: Product, product2: any) {
    this.product = {
      id: product2.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      qtd: product2.qtd,
    };

    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Product updated successfully!');
      this.router.navigate(['/products']);
    });
  }

  signUp(user: User) {
    this.user = {
      email: user.email,
      password: user.password,
      rolesId: [
        {
          id: 2,
          name: 'visitorUser',
          permissionId: [
            {
              id: 2,
              name: 'user',
            },
          ],
        },
      ],
    };

    this.registerService.create(this.user).subscribe(
      () => {
        this.registerService.showMessage('Successfully registered!');
        setTimeout(() => {
          this.router.navigate(['/request']);
        }, 1000);
      },
      (error) => {
        if (error) {
          this.registerService.showMessage(
            'Oops... An unexpected error has occurred. Try again later!!'
          );
          this.router.navigate(['/register']);
        }
      }
    );
  }

  signIn(username: User) {
    this.username = {
      email: username.email,
      password: username.password,
    };

    this.registerService.getUserByEmail(this.username).subscribe(
      () => {
        this.registerService.showMessage('We can now finalize your order!');
        setTimeout(() => {
          this.router.navigate(['/request']);
        }, 1000);
      },
      (error) => {
        if (error) {
          this.registerService.showMessage(
            'You have no registration. Please register!'
          );
          this.router.navigate(['/register']);
        }
      }
    );
  }
}
