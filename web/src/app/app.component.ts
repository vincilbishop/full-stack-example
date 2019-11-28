import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {debounce} from 'rxjs/operators';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';

interface Launch {
  createdAt: object;
  id: number;
  tag: string;
  updatedAt: object;
  articleUrl: string;
  badgeUrl: string;
  landed: boolean;
  launchDate: object;
  launchDetails: string;
  launchNumber: number;
  reddit: boolean;
  reused: boolean;
  rocketName: string;
  rocketType: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('formElement', { static: false }) formElement;

  launches$: Observable<Launch[]>;
  filter = {
    landed: false,
    reused: false,
    reddit: false,
  };

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    this.queryLaunches();
  }

  ngAfterViewInit() {
    this.formElement.form.valueChanges.pipe(debounce(() => timer(300))).subscribe(change => {
      this.queryLaunches(change);
    });
  }

  queryLaunches(query: any = null) {
    let httpParams = null;

    if (query) {
      _.forOwn(query, (value, key) => {
        if (value) {
          console.log(key, value);
          if (!httpParams) {
            httpParams = [];
          }

          httpParams.push(`filter=${key}||eq||${value}`);
        }
      });
    }

    let url = 'launch';

    if (httpParams) {
      url = `${url}?${httpParams.join('&')}`;
    }

    console.log(url);

    this.launches$ = this.httpClient.get<Launch[]>(url);
  }
}
