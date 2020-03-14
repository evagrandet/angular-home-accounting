import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [FilterPipe],
    imports: [FormsModule, ReactiveFormsModule, NgxChartsModule],
    exports: [FormsModule, ReactiveFormsModule, NgxChartsModule, FilterPipe],
})
export class SharedModule {}
