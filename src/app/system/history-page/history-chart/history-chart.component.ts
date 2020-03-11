import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-history-chart',
    templateUrl: './history-chart.component.html',
    styleUrls: ['./history-chart.component.scss'],
})
export class HistoryChartComponent {
    @Input() data: any;
    view: any[] = [700, 400];

    // options
    gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = true;
    legendPosition: string = 'right';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    };

    constructor() {
        //Object.assign(this.data);
    }
}
