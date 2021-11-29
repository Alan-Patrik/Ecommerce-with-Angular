import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCarService {
  baseUrl = 'http://localhost:3001/cart';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-failed'] : ['msg-success'],
    });
  }

  add(product: Product) {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read() {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number) {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(product: Product) {
    const url = `${this.baseUrl}/${product.id}`;

    return this.http.patch<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(product: Product) {
    const url = `${this.baseUrl}/${product.id}`;

    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(
      'Oops... An unexpected error has occurred. Try again later!!',
      true
    );
    return EMPTY;
  }
}
