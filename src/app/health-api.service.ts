import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthApiService {

  constructor(private http: HttpClient) {}

  dailyForecast(): any {
    return new Promise(resolve => {
      this.http
        .get('/api/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22')
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
