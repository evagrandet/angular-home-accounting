import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    declarations: [],
    imports: [FormsModule, ReactiveFormsModule, NgxChartsModule],
    exports: [FormsModule, ReactiveFormsModule, NgxChartsModule],
})
export class SharedModule {}
