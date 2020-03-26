import {
    Component,
    OnInit,
    Injectable,
    OnDestroy,
    ViewContainerRef,
    ViewChild,
    ComponentRef,
    ApplicationRef,
    HostListener,
    ComponentFactory,
} from '@angular/core';
import { ModalInstance } from '../../modal.instance';

@Injectable()
@Component({
    selector: 'app-modal-container',
    templateUrl: './modal-container.component.html',
    styleUrls: ['./modal-container.component.scss'],
})
export class ModalContainerComponent implements OnInit, OnDestroy {
    @ViewChild('content', { read: ViewContainerRef, static: true })
    contentView: ViewContainerRef;
    /**
     * Modal component.
     */
    modalRef: ComponentRef<any>;
    /**
     * @param applicationRef
     * @param viewRef
     * @param modalInstance
     */
    constructor(
        private applicationRef: ApplicationRef,
        private viewRef: ViewContainerRef,
        private modalInstance: ModalInstance,
    ) {}
    ngOnInit(): void {
        document.body.classList.add('modal-open');
    }
    ngOnDestroy(): void {
        document.body.classList.remove('modal-open');
    }
    @HostListener('document:keydown', ['$event'])
    onKeyDown(e: KeyboardEvent): void {
        if (this.modalInstance.closable !== false && e.key && e.key.toLowerCase() === 'escape') {
            this.modalInstance.dismiss();
        }
    }
    @HostListener('click', ['$event'])
    onClick(event: Event) {
        if (
            this.modalInstance.closable &&
            (!this.modalRef.location.nativeElement.contains(event.target) ||
                this.modalRef.location.nativeElement === event.target)
        ) {
            this.modalInstance.dismiss();
        }
    }
    /**
     * Create modal component.
     */
    createComponent<T>(componentFactory: ComponentFactory<T>) {
        this.modalRef = this.contentView.createComponent(componentFactory, undefined, this.modalInstance.injector);
        return this.modalRef;
    }
}
