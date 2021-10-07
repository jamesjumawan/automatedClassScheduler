import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageEntitiesComponent } from './manage-entities/manage-entities.component';
import { SetupSemComponent } from './setup-sem/setup-sem.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EntitiesCollegesComponent } from './manage-entities/entities-colleges/entities-colleges.component';
import { EntitiesSemestersComponent } from './manage-entities/entities-semesters/entities-semesters.component';
import { EntitiesCoursesComponent } from './manage-entities/entities-courses/entities-courses.component';
import { EntitiesSubjectsComponent } from './manage-entities/entities-subjects/entities-subjects.component';
import { EntitiesRoomsComponent } from './manage-entities/entities-rooms/entities-rooms.component';
import { EntitiesEmployeesComponent } from './manage-entities/entities-employees/entities-employees.component';
import { EntitiesUsersComponent } from './manage-entities/entities-users/entities-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageEntitiesComponent,
    SetupSemComponent,
    SchedulesComponent,
    HomeComponent,
    HeaderComponent,
    EntitiesCollegesComponent,
    EntitiesSemestersComponent,
    EntitiesCoursesComponent,
    EntitiesSubjectsComponent,
    EntitiesRoomsComponent,
    EntitiesEmployeesComponent,
    EntitiesUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
