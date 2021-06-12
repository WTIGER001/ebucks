import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SpendComponent } from './pages/spend/spend.component';
import { TimedActivityComponent } from './pages/timed-activity/timed-activity.component';
import { WelcomComponent } from './pages/welcom/welcom.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'welcome', component: WelcomComponent},
  {path: 'spend', component: SpendComponent}, 
  {path: 'spend/:activity-id', component: TimedActivityComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
