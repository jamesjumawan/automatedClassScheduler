import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from "./home/home.component";
import { ManageEntitiesComponent } from "./manage-entities/manage-entities.component";
import { SetupSemComponent } from "./setup-sem/setup-sem.component";
import { SchedulesComponent } from "./schedules/schedules.component";
import { LoginComponent } from "./login/login.component";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'manage',
    component: ManageEntitiesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'setup',
    component: SetupSemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'schedules',
    component: SchedulesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
