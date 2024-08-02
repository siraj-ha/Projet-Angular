import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  createUser(user: any): Observable<any> {
    return this.http.post<any>(
      'localhost:3000/userManagement',
      user
    ) as Observable<any>;
  }
}
