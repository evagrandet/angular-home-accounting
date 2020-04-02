import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FilterPipe } from './pipes/filter.pipe';
import { Error404Component } from './components/error404/error404.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    declarations: [FilterPipe, Error404Component, LoaderComponent],
    imports: [FormsModule, ReactiveFormsModule, NgxChartsModule],
    exports: [FormsModule, ReactiveFormsModule, NgxChartsModule, FilterPipe, Error404Component, LoaderComponent],
})
export class SharedModule {}
