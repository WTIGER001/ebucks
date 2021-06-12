import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomComponent } from './pages/welcom/welcom.component';
import { HomeComponent } from './pages/home/home.component';
import { SpendComponent } from './pages/spend/spend.component';
import { TimedActivityComponent } from './pages/timed-activity/timed-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent,
    HomeComponent,
    SpendComponent,
    TimedActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
