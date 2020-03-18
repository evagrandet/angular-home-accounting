export class ModalResult {
    promise: Promise<any>;
    resolve: (value?: any | PromiseLike<any>) => void;
    reject: (reason?: any) => void;

    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
