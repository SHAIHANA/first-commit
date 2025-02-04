import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import { AdduserComponent } from './modules/users/adduser/adduser.component';
import { EdituserComponent } from './modules/users/edituser/edituser.component';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'
import { HighchartsChartModule } from 'highcharts-angular';

import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    UserListComponent,
    AdduserComponent,
    EdituserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    MatDatepickerModule,MatCardModule,MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
