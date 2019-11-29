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
    this.refreshQuery();
  }

  ngAfterViewInit() {
    // Let's observe and debounce changes to the query form to results update when the user changes their selection
    this.formElement.form.valueChanges.pipe(debounce(() => timer(300))).subscribe(change => {
      this.refreshQuery();
    });
  }

  refreshQuery() {
    let httpParams = null;

    // Let's build the query string based on the user's selection.
    _.forOwn(this.filter, (value, key) => {
      if (value) {
        if (!httpParams) {
          httpParams = [];
        }

        httpParams.push(`filter=${key}||eq||${value}`);
      }
    });

    let url = 'launch';

    if (httpParams) {
      // HACK: Normally would have preferred to use HttpParams,
      // but the @nest/crud API Tool brings an incompatibility when it comes to multiple filters
      url = `${url}?${httpParams.join('&')}`;
    }

    this.launches$ = this.httpClient.get<Launch[]>(url);
  }
}
