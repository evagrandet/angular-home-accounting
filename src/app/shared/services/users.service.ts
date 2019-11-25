import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    user: User;

  constructor(private http: HttpClient) { }

    getUser(user): Observable<any> {
      return this.http.get<User[]>('http://localhost:3000/users');
  }
    getUserByEmail(email: string): Observable<any> {
        return this.http.get(`http://localhost:3000/users?email=${'email'}`);
    }

  createUser(user): Observable<any> {
      return this.http.post<User[]>('http://localhost:3000/users', user);
  }
}
