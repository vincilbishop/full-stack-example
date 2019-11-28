import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Launch, LaunchApiService} from './shared/api';
import {Observable, timer} from 'rxjs';
import {debounce} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('formElement', {static: false}) formElement;


  launches$: Observable<Launch[]>;
  filter = {
    land: false,
    reused: false,
    withReddit: false,
  };

  constructor(private readonly launchService: LaunchApiService) {
  }

  ngOnInit(): void {
    this.queryLaunches();
  }

  ngAfterViewInit() {
    this.formElement.form.valueChanges.pipe(
      debounce(() => timer(300))
    ).subscribe((change) => {
      console.log(change);
    });
  }

  queryLaunches(query: any = null) {

    if (query) {

    }

    this.launches$ = this.launchService.launchGet(null,'');
  }
}
