import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecast[];
  urlBase: string = "http://localhost:44212";

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    console.log(`${this.urlBase}`);
    this.http.get<WeatherForecast[]>(`${this.urlBase}/api/SampleData/WeatherForecasts`)
      .subscribe(result => {
        this.forecasts = result;
      }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
