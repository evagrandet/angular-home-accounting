import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';
import { BaseApi } from 'app/shared/core/base-api';

@Injectable({
    providedIn: 'root',
})
export class BillService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }

    getBill(): Observable<Bill> {
        return this.get('bill');
    }

    updateBill(bill: Bill): Observable<Bill> {
        return this.put('bill', bill);
    }

    getCurrency(): Observable<any> {
        return this.http.get('http://data.fixer.io/api/latest?access_key=13a20973f8cc09e89a245f73a67d1dda');
    }
}
