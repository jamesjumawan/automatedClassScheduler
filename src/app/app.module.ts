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
import { TabTemplateComponent } from './tab-template/tab-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageEntitiesComponent,
    SetupSemComponent,
    SchedulesComponent,
    HomeComponent,
    HeaderComponent,
    TabTemplateComponent
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
