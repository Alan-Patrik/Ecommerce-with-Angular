import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinishService } from './finish.service';
import { Order } from './order.model';

@Component({
  selector: 'app-finalize-order',
  templateUrl: './finalize-order.component.html',
  styleUrls: ['./finalize-order.component.scss'],
})
export class FinalizeOrderComponent implements OnInit {
  total: number = 0;
  isPresent: boolean = false;
  order: Order = {};
  displayedColumns = ['image', 'id', 'name', 'price', 'description', 'qtd'];

  constructor(
    private finishService: FinishService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.finishService.read().subscribe((order) => {
      this.order = order[0];
      
      if (order[0]) {
        this.totalCart();
        this.isPresent = true
      }
    });
    this.isPresent = false;
  }

  totalCart(): void {
    this.total = this.order.total!;
  }

  cancel(): void {
    this.router.navigate(['/cart']);
  }

  finish(): void{
    this.router.navigate(['/register']);
  }
}
