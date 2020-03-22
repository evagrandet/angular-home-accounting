import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './component/modal/modal.component';
import { ModalContentComponent } from './component/modal-content/modal-content.component';
import { ModalContainerComponent } from './component/modal-container/modal-container.component';
import { ModalService } from './modal.service';

@NgModule({
    declarations: [ModalContainerComponent, ModalComponent, ModalContentComponent],
    imports: [CommonModule],
    providers: [ModalService],
    entryComponents: [ModalContainerComponent],
    exports: [ModalComponent, ModalContentComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ModalModule {}
