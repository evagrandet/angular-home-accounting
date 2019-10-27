import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    user: User;

  constructor(private http: HttpClient) { }

    getUser(): Observable<User[]> {
      return this.http.get<User[]>('http://localhost:3000/users');
  }
}
