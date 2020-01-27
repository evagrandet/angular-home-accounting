import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { Bill } from '../shared/models/bill';
import { combineLatest, Subscription } from 'rxjs';


@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {
    isLoad = false;
    currency: any;
    bill: Bill;
    sub1: Subscription;
    sub2: Subscription;

    constructor(private billService: BillService) { }

    ngOnInit() {
        this.sub1 = combineLatest(
            this.billService.getBill(),
            this.billService.getCurrency())
            .subscribe((data: [Bill, any]) => {
                this.bill = data[0],
                this.currency = data[1];
                this.isLoad = true;
          });
    }
    ngOnDestroy() {
        this.sub1.unsubscribe();
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
    }
    onRefresh() {
        this.isLoad = false;
        this.sub2 = this.billService.getCurrency()
            .subscribe((currency: any) => {
                this.currency = currency;
        });
        this.isLoad = true;
    }
}
