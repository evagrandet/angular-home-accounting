import { Component, OnInit } from '@angular/core';
import { BillService } from 'app/shared/services/bill.service';
import { CategoriesService } from 'app/shared/services/categories.service';
import { ActionsService } from 'app/shared/services/actions.service';

@Component({
    selector: 'app-planning-page',
    templateUrl: './planning-page.component.html',
    styleUrls: ['./planning-page.component.scss'],
})
export class PlanningPageComponent implements OnInit {
    constructor(
        private billService: BillService,
        private categoriesService: CategoriesService,
        private actionService: ActionsService,
    ) {}

    ngOnInit() {}
}
