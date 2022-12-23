import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreaterequestComponent } from './createrequest/createrequest.component';
import { GetrequestbystatusComponent } from './getrequestbystatus/getrequestbystatus.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListofcustomersComponent } from './listofcustomers/listofcustomers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestlistComponent } from './requestlist/requestlist.component';
import { ResponseComponent } from './response/response.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { UpdaterequestComponent } from './updaterequest/updaterequest.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CreaterequestComponent,
    GetrequestbystatusComponent,
    HeaderComponent,
    HomeComponent,
    ListofcustomersComponent,
    LoginComponent,
    RegisterComponent,
    RequestlistComponent,
    ResponseComponent,
    UpdatecustomerComponent,
    UpdaterequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
