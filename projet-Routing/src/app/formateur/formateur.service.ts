import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FormateurService {
  constructor(private http: HttpClient) {}
  private jsonUrl = 'assets/file.json';
  getListUSers(): Observable<any> {
    return this.http.get(this.jsonUrl) as Observable<any>;
  }
}
