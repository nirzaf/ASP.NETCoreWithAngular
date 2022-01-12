import {
  Inject, Component,
  AfterViewInit,
  AfterContentInit,
  DoCheck,
  OnInit,
  AfterContentChecked,
  OnDestroy, OnChanges, AfterViewChecked
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements
  OnInit, DoCheck, OnChanges,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterContentChecked,
  AfterViewChecked, OnDestroy  {
  public forecasts: WeatherForecast[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  //create methods of all life cycles of angular
  ngOnChanges() {
    //Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
    //Note that if your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges().
  }

  ngOnInit() {
    // Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not
    // (which is the case when there are no template-bound inputs).
  }


  ngDoCheck() {
    // Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
  }

  ngAfterContentInit() {
    // Called once after the first ngDoCheck().
  }

  ngAfterContentChecked() {
    // Called after ngAfterContentInit() and every subsequent ngDoCheck().
  }

  ngAfterViewInit() {
    // Called once after the first ngAfterContentChecked().
  }

  ngAfterViewChecked() {
    // Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
  }

  ngOnDestroy() {
    // Called immediately before Angular destroys the directive or component.
  }

}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
