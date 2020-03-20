import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    @ViewChild('modal', { read: ViewContainerRef, static: false })
    modalViewRef: ViewContainerRef;
    title = 'home-accounting';
}
