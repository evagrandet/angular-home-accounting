import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, Type } from '@angular/core';
import { ModalInstance } from './modal.instance';
import { ModalResult } from './modal.result';
import { ModalComponentInterface } from './component/modal.interface';
import { ModalContainerComponent } from './component/modal-container/modal-container.component';

@Injectable()
export class ModalService {
    /**
     * Current modal instance.
     */
    private modalInstance: ModalInstance;
    /**
     * Current modal promise.
     */
    private modalResult: ModalResult;
    /**
     * @param componentFactoryResolver
     * @param injector
     * @param appRef
     */
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef,
    ) {}
    /**
     * Open modal.
     *
     * TODO: throw error if other modal is open?
     *
     * @param component
     * @param context
     * @return Promise<any>
     */
    public open(component: Type<ModalComponentInterface>, context: any = null): Promise<any> {
        const instance = this.createModalInstance(context, ModalContainerComponent);
        // Create modal component in container.
        instance.containerRef.instance.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(component),
        );
        this.modalInstance = instance;
        this.modalResult = new ModalResult();
        Promise.all([this.modalResult.promise])
            .then(() => this.destroyModal())
            .catch(() => this.destroyModal());
        try {
            this.appRef.tick();
        } catch (e) {
            // ignore it
        }
        return this.modalResult.promise;
    }
    /**
     * Create injector.
     *
     * @returns {ReflectiveInjector}
     */
    private createInjector() {
        return Injector.create({
            providers: [
                {
                    provide: ModalInstance,
                    useClass: ModalInstance,
                    deps: [],
                },
            ],
            parent: this.injector,
        });
    }
    /**
     * Create container.
     *
     * @param context
     * @param type
     * @return {ModalInstance}
     */
    private createModalInstance(context: any, type: any) {
        const viewContainer = this.appRef.components[0].instance['modalViewRef'];
        if (!viewContainer) {
            throw Error(
                'No set viewContainer for modal. ' +
                    'Set it in root AppComponent with public property modalViewRef and type ViewContainerRef',
            );
        }
        const injector = this.createInjector();
        const instance = injector.get(ModalInstance) as ModalInstance;
        instance.context = context;
        instance.service = this;
        instance.injector = injector;
        instance.containerRef = viewContainer.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(type),
            0,
            injector,
        );
        return instance;
    }
    /**
     * Destroy modal instance.
     */
    private destroyModal() {
        if (this.modalInstance) {
            this.modalInstance.containerRef.destroy();
            this.modalInstance = null!;
            this.modalResult = null!;
            // After close mode need call detect changes for all
            this.appRef.components[0].changeDetectorRef.detectChanges();
        }
    }
    /**
     * Get current modal instance.
     */
    public instance(): ModalInstance {
        return this.modalInstance;
    }
    /**
     * Is modal open?
     */
    public isActive() {
        return !!this.modalInstance;
    }
    /**
     * Close current modal.
     */
    public close(value?: any | PromiseLike<any>): void {
        if (this.modalInstance) {
            this.modalResult.resolve(value);
        }
    }
    /**
     * Dismiss current modal.
     */
    public dismiss(reason?: any): void {
        if (this.modalInstance) {
            this.modalResult.reject(reason);
        }
    }
}
