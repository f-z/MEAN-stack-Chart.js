import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthApiService {
  apiString = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi';
  params = '?db=pubmed&rettype=count&retmode=json&sort=pub+date&usehistory=y';

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

  publicationCount(term: string, date: number): any {
    return new Promise(resolve => {
      this.http
        .get(this.apiString + this.params + '&term=' + term + '&mindate=' + date + '&maxdate=' + date)
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
