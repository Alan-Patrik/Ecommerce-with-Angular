import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class FinishService {
  baseUrl = 'http://localhost:3001/order';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-failed'] : ['msg-success']
    });
  }

  create(order: Order) {
    return this.http.post<Order>(this.baseUrl, order).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read() {
    return this.http.get<Order[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number) {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Order>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(order: Order) {
    const url = `${this.baseUrl}/${order.id}`;

    return this.http.delete<Order>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Oops... An unexpected error has occurred. Try again later!!', true);
    return EMPTY;
  }
}
