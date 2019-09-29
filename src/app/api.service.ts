import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  configUrl = 'http://76673067.ngrok.io';

  constructor(private http: HttpClient) { }
  getMain(ids: Array<number>): Observable<any> {
    return this.http.post<any>(this.configUrl + '/api/main', ids);
  }
}
