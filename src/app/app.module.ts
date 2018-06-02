import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HealthApiService } from './health-api.service';

import { MatButtonModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [ HealthApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
