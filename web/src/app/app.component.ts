import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Launch, LaunchApiService} from './shared/api';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('f', {static: false}) f;


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
    this.f.form.valueChanges.subscribe((change) => {
      console.log(change);
    });
  }

  queryLaunches() {
    this.launches$ = this.launchService.launchGet();
  }
}
