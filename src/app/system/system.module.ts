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
import { BillService } from './shared/services/bill.service';

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
    ],
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  providers: [BillService]
})
export class SystemModule { }
