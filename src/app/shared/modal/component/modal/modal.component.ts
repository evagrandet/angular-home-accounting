import { Component } from '@angular/core';
import { ModalService } from '../../modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    /**
     * @param (ModalService) modalService
     */
    constructor(public modalService: ModalService) {}
}
