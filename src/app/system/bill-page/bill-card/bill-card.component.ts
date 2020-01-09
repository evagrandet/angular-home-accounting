import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {
    rub = 0;
    dollar = 0;
    @Input() bill: Bill;
    @Input() currency: any;

    constructor() { }

    ngOnInit() {
        this.rub = this.currency.rates['RUB'] * this.bill.value;
        this.dollar = this.currency.rates['USD'] * this.bill.value;
    }

}
