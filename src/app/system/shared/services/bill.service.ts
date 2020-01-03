import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  getBill(): Observable<Bill> {
      return this.http.get<Bill>('http://localhost:3000/bill');
  }

  getCurrency() {
      return this.http.get('http://data.fixer.io/api/latest?access_key=13a20973f8cc09e89a245f73a67d1dda');
  }
}
