import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinishService } from '../finalize-order/finish.service';
import { Order } from '../finalize-order/order.model';

@Component({
  selector: 'app-modal-confirmation-cancel',
  templateUrl: './modal-confirmation-cancel.component.html',
  styleUrls: ['./modal-confirmation-cancel.component.scss']
})
export class ModalConfirmationCancelComponent implements OnInit {
  order: Order = {};

  constructor(
    private finishService: FinishService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.finishService.readById(id).subscribe((order) => {
      this.order = order;
    });
  }

  deleteOrder(): void {
    if (this.order.id) {
      this.finishService.delete(this.order).subscribe(() => {
        this.finishService.showMessage("Order canceled successfully")
        this.router.navigate(['/cart']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['./order']);
  }
}
