import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'app/shared/models/category';
import { Action } from 'app/shared/models/action';
import { ModalService } from 'app/shared/modal/modal.service';
import { HistoryDetailComponent } from '../history-detail/history-detail.component';

@Component({
    selector: 'app-history-events',
    templateUrl: './history-events.component.html',
    styleUrls: ['./history-events.component.scss'],
})
export class HistoryEventsComponent implements OnInit {
    @Input() categories: Category[];
    @Input() actions: Action[];
    searchValue = '';
    searchPlaceholder: string = 'Сумма';
    searchField = 'amount';

    constructor(private modalService: ModalService) {}

    ngOnInit() {
        this.actions.forEach((action: Action) => {
            action.categoryName = this.categories.find((category: Category) => category.id === action.category).name;
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
    openDetail(action: Action) {
        this.modalService.open(HistoryDetailComponent, action);
    }
}
