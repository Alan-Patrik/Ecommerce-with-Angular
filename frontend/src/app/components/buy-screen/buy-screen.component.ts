import { Component, OnInit } from '@angular/core';
import { FinishService } from '../finalize-order/finish.service';
import { Order } from '../finalize-order/order.model';

@Component({
  selector: 'app-buy-screen',
  templateUrl: './buy-screen.component.html',
  styleUrls: ['./buy-screen.component.scss'],
})
export class BuyScreenComponent implements OnInit {
  total: number = 0;
  order: Order = {};
  isPresent: boolean = false;

  constructor(private finishService: FinishService) {}

  ngOnInit(): void {
    this.finishService.read().subscribe((order) => {
      this.order = order[0];
      if (order[0]) {
        this.isPresent = true;
        this.totalCart();
      }
    });

    this.isPresent = false;
  }

  totalCart(): void {
    this.total = this.order.total!;
  }
}
