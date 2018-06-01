import { Component } from '@angular/core';
import { HealthApiService } from './health-api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  chart = [];

  constructor(private health: HealthApiService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.health.dailyForecast().then(res => {
        // tslint:disable-next-line:no-shadowed-variable
        const temp_max = res['list'].map(res => res.main.temp_max);
        // tslint:disable-next-line:no-shadowed-variable
        const temp_min = res['list'].map(res => res.main.temp_min);
        // tslint:disable-next-line:no-shadowed-variable
        const alldates = res['list'].map(res => res.dt);
        const weatherDates = [];
        // tslint:disable-next-line:no-shadowed-variable
        alldates.forEach((res) => {
            const jsdate = new Date(res * 1000);
            weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
        });

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      });
  }
}
