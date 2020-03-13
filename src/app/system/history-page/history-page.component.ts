import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/shared/services/categories.service';
import { ActionsService } from 'app/shared/services/actions.service';
import { Subscription, combineLatest } from 'rxjs';
import { Category } from 'app/shared/models/category';
import { Action } from 'app/shared/models/action';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.scss'],
})
export class HistoryPageComponent implements OnInit {
    isLoad = false;
    stream$: Subscription;
    categories: Category[];
    actions: Action[];
    chartData: [];

    constructor(private categoriesService: CategoriesService, private actionsService: ActionsService) {}

    ngOnInit() {
        this.stream$ = combineLatest(
            this.categoriesService.getCategories(),
            this.actionsService.getActions(),
        ).subscribe((data: [Category[], Action[]]) => {
            this.categories = data[0];
            this.actions = data[1];
            this.calculateChartData();
            this.isLoad = true;
        });
    }
    calculateChartData(): void {
        this.chartData = [];
        this.categories.forEach((category: Category) => {
            let categoryEvents = this.actions.filter(
                (action: Action) => action.category === category.id && action.type === 'outcome',
            );
            this.chartData.push({
                name: category.name,
                value: categoryEvents.reduce((total, event) => {
                    total += event.amount;
                    return total;
                }, 0),
            });
        });
    }
    ngOnDestroy(): void {
        if (this.stream$) {
            this.stream$.unsubscribe();
        }
    }
}
