import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from 'app/shared/services/bill.service';
import { CategoriesService } from 'app/shared/services/categories.service';
import { ActionsService } from 'app/shared/services/actions.service';
import { Category } from 'app/shared/models/category';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs';
import { combineLatest } from 'rxjs';
import { Bill } from 'app/shared/models/bill';
import { Action } from 'app/shared/models/action';

@Component({
    selector: 'app-planning-page',
    templateUrl: './planning-page.component.html',
    styleUrls: ['./planning-page.component.scss'],
})
export class PlanningPageComponent implements OnInit, OnDestroy {
    isLoad = false;
    categories: Category[];
    bill: Bill;
    actions: Action[];
    stream$: Subscription;
    constructor(
        private billService: BillService,
        private categoriesService: CategoriesService,
        private actionService: ActionsService,
    ) {}

    ngOnInit() {
        this.stream$ = combineLatest(
            this.billService.getBill(),
            this.categoriesService.getCategories(),
            this.actionService.getActions(),
        ).subscribe((result: [Bill, Category[], Action[]]) => {
            (this.bill = result[0]), (this.categories = result[1]), (this.actions = result[2]), (this.isLoad = true);
        });
    }

    getPercents(all: number, num: number): number {
        return (num * 100) / all;
    }

    ngOnDestroy() {
        if (this.stream$) {
            this.stream$.unsubscribe;
        }
    }
}
