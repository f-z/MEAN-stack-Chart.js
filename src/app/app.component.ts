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
  results = [];
  dates = [];
  labels = [];

  term: string;
  minDate: number;
  maxDate: number;

  loading: boolean;

  constructor(private health: HealthApiService) {
    // default values
    this.term = 'asthma';
    this.minDate = 2000;
    this.maxDate = 2017;
    this.loading = true;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // displaying an example chart upon load
    this.getAllData(this.term, this.minDate, this.maxDate);
  }

  getAllData(term: string, minDate: number, maxDate: number) {
    // resetting variables
    this.results = [];
    this.dates = [];
    this.labels = [];
    this.loading = true;

    this.getYearCount(term, minDate);
  }

  getYearCount(term: string, date: number) {
    if (date <= this.maxDate) {
      this.health.getPublicationCount(term, date).then(res => {
        this.results.push(
          res.esearchresult.count
        );
        this.dates.push(date);
        this.labels.push(date);
        this.createChart();

        this.getYearCount(term, date + 1);
      });
    } else {
      this.loading = false;
    }
  }

  createChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        // labels: this.dates,
        labels: this.labels,
        datasets: [
          {
            data: this.results,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        title: {
          display: true
        },
        events: ['click'],
        scales: {
          xAxes: [{
            display: true
          }],
          ticks: {
            source: 'data'
          },
          yAxes: [{
            display: true
          }],
          bounds: 'data'
        },
        animation: false
      }
    });
  }
}
