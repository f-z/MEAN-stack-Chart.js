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
  results: any;
  dates: any;

  constructor(private health: HealthApiService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.results = [];
    this.dates = [];

    for (let date = 2000; date <= 2018; date++) {
      this.getData(date);
    }

    console.log(this.dates);
    console.log(this.results);
  }

  getData(date: number) {
    this.health.publicationCount('asthma', date).then(res => {
      this.results.push(
        res.esearchresult.count
      );
      this.dates.push(date);
      this.createChart();
    });
}

    createChart() {
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          // labels: this.dates,
          labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
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
          }
        }
    });
    }
  }
