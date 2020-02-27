import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApi } from '../core/base-api';

@Injectable({
    providedIn: 'root',
})
export class UsersService extends BaseApi {
    user: User;

    constructor(public http: HttpClient) {
        super(http);
    }

    getUser(user: User): Observable<any> {
        return this.get('users');
    }

    getUserByEmail(email: string): Observable<any> {
        return this.get(`users?email=${email}`).pipe(map((user: User[]) => (user[0] ? user[0] : undefined)));
    }

    createUser(user: User): Observable<any> {
        return this.post('users', user);
    }
}
