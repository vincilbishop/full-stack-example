import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Launch } from './models/launch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeIn', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(250)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(250, style({ opacity: 0 }))),
    ]),
  ],
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
