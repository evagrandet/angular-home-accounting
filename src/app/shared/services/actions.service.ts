import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from '../core/base-api';
import { Observable } from 'rxjs';
import { Action } from '../models/action';

@Injectable({
    providedIn: 'root',
})
export class ActionsService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }
    addAction(action: Action): Observable<Action> {
        return this.post('events', action);
    }

    getActions(): Observable<Action[]> {
        return this.get('events');
    }
}
