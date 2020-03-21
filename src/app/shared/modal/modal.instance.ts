import { Injectable, ComponentRef, Injector } from '@angular/core';
import { ModalContainerComponent } from './component/modal-container/modal-container.component';
import { ModalService } from './modal.service';

@Injectable()
export class ModalInstance {
    /**
     * Modal container ref.
     */
    containerRef: ComponentRef<ModalContainerComponent>;
    /**
     * Context.
     */
    context: any;
    /**
     * Is modal closable.
     */
    closable = true;
    /**
     * Is modal injector.
     */
    injector: Injector;
    /**
     * Modal service.
     */
    service: ModalService;
    /**
     * Dismiss open modal.
     *
     * @param reason
     */
    dismiss(reason?: any): any {
        this.service.dismiss(reason);
    }
    /**
     * Close open modal.
     *
     * @param value
     */
    close(value?: any): any {
        this.service.close(value);
    }
}
