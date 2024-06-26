import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  private apiUrl = 'https://holidays-jp.github.io/api/v1/date.json'; // 国民の祝日APIのエンドポイント

  constructor(private http: HttpClient) {}

  getHolidays(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
