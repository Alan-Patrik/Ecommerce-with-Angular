import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { FinishService } from '../finalize-order/finish.service';
import { Order } from '../finalize-order/order.model';

@Component({
  selector: 'app-nf-e',
  templateUrl: './nf-e.component.html',
  styleUrls: ['./nf-e.component.scss']
})
export class NFEComponent implements OnInit {
  @ViewChild('content', {static: false}) el!: ElementRef;

  total: number = 0;
  order: Order = {};
  isPresent: boolean = false;

  constructor(
    private finishService: FinishService
  ) {}

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

  print(): void {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("NF-e.pdf");
      }
    })
  }
}
