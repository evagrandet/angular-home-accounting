import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'app/shared/models/category';
import { Action } from 'app/shared/models/action';

@Component({
    selector: 'app-history-events',
    templateUrl: './history-events.component.html',
    styleUrls: ['./history-events.component.scss'],
})
export class HistoryEventsComponent implements OnInit {
    @Input() categories: Category[];
    @Input() actions: Action[];
    searchValue = '';
    searchPlaceholder = 'Сумма';
    searchField = 'amount';

    constructor() {}

    ngOnInit() {
        console.log(this.actions);
        this.actions.forEach((action: Action) => {
            action.categoryName = this.categories.find((category: Category) => category.id === action.category)['name'];
        });
    }
    selectOption(option: string) {
        const namesMap = {
            amount: 'Сумма',
            date: 'Дата',
            category: 'Категория',
            type: 'Тип',
        };
        this.searchPlaceholder = namesMap[option];
        this.searchField = option;
    }
}
