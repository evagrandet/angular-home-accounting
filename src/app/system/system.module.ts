import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { AsideComponent } from './shared/components/aside/aside.component';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';
import { BillService } from '../shared/services/bill.service';
import { AddEventComponent } from './records-page/add-event/add-event.component';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { EditCategoryComponent } from './records-page/edit-category/edit-category.component';
import { CategoriesService } from '../shared/services/categories.service';
import { ActionsService } from 'app/shared/services/actions.service';
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { HistoryEventsComponent } from './history-page/history-events/history-events.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { HistoryFilterComponent } from './history-page/history-filter/history-filter.component';

@NgModule({
    declarations: [
        SystemComponent,
        BillPageComponent,
        HistoryPageComponent,
        PlanningPageComponent,
        RecordsPageComponent,
        HeaderComponent,
        AsideComponent,
        BillCardComponent,
        CurrencyCardComponent,
        AddEventComponent,
        AddCategoryComponent,
        EditCategoryComponent,
        HistoryChartComponent,
        HistoryEventsComponent,
        HistoryDetailComponent,
        HistoryFilterComponent,
    ],
    imports: [CommonModule, SharedModule, SystemRoutingModule],
    providers: [BillService, CategoriesService, ActionsService],
})
export class SystemModule {}
