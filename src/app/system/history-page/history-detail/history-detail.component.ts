import { Component, OnInit } from '@angular/core';
import { AbstractModalComponent } from 'app/shared/modal/component/abstract.modal';
import { ModalInstance } from 'app/shared/modal/modal.instance';
import { Action } from 'app/shared/models/action';

@Component({
    selector: 'app-history-detail',
    templateUrl: './history-detail.component.html',
    styleUrls: ['./history-detail.component.scss'],
})
export class HistoryDetailComponent extends AbstractModalComponent {
    action: Action;

    constructor(modalInstance: ModalInstance) {
        super(modalInstance);
        this.action = modalInstance.context;
    }
}
