import { ModalComponentInterface } from './modal.interface';
import { ModalInstance } from '../modal.instance';

export abstract class AbstractModalComponent implements ModalComponentInterface {
    public modalInstance: ModalInstance;

    protected constructor(modalInstance: ModalInstance) {
        this.modalInstance = modalInstance;
    }
    dismiss(reason?: any) {
        this.modalInstance.dismiss(reason);
    }
    close(value?: any) {
        this.modalInstance.close(value);
    }
}
