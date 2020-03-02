import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Category } from 'app/shared/models/category';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

import { Action } from 'app/shared/models/action';
import { ActionsService } from 'app/shared/services/actions.service';
import { BillService } from 'app/shared/services/bill.service';
import { Bill } from 'app/shared/models/bill';
import { mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit, OnDestroy {
    @Input() categories: Category[];
    action: Action;
    isError = false;
    sub1: Subscription;
    sub2: Subscription;

    constructor(private actionService: ActionsService, private billService: BillService) {}

    ngOnInit() {}

    onSubmit(form: NgForm) {
        this.action = {
            type: form.value.type,
            amount: form.value.amount,
            category: form.value.category,
            date: moment().format('DD.MM.YYYY HH:mm:ss'),
            description: form.value.description,
        };
        this.sub1 = this.billService.getBill().subscribe((bill: Bill) => {
            let value = 0;
            if (this.action.type == 'outcome') {
                if (this.action.amount > bill.value) {
                    this.isError = true;
                    return;
                } else {
                    value = bill.value - this.action.amount;
                }
            } else {
                value = this.action.amount + bill.value;
            }
            this.sub2 = this.billService
                .updateBill({ value, currency: bill.currency })
                .pipe(mergeMap(() => this.actionService.addAction(this.action)))
                .subscribe(() => {
                    form.setValue({
                        amount: 0,
                        description: ' ',
                        category: 1,
                        type: 'outcome',
                    });
                });
        });
    }
    ngOnDestroy(): void {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
        if (this.sub2) {
            this.sub2.unsubscribe();
        }
    }
}
