import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiModule, BASE_PATH} from './shared/api';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    ApiModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: BASE_PATH, useValue: environment.API_BASE_PATH}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
