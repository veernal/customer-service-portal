import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaterequestComponent } from './createrequest/createrequest.component';
import { GetrequestbystatusComponent } from './getrequestbystatus/getrequestbystatus.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListofcustomersComponent } from './listofcustomers/listofcustomers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { RequestbystatusComponent } from './requestbystatus/requestbystatus.component';
import { RequestlistComponent } from './requestlist/requestlist.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
// import { UpdatecustomerdetailsComponent } from './updatecustomerdetails/updatecustomerdetails.component';
import { UpdaterequestComponent } from './updaterequest/updaterequest.component';
// import { UpdatecustomerdetailsComponent } from './updatecustomerdetails/updatecustomerdetails.component';

const routes: Routes = [
  { path:'register', component: RegisterComponent},
  { path:'home', component: HomeComponent},
  {path:'', component: LoginComponent},
  {path:'header', component: HeaderComponent},
  {path:'createRequest',component:CreaterequestComponent},
  {path:'getCustomers',component:ListofcustomersComponent},
  {path:'requestByStatus',component:GetrequestbystatusComponent},
  {path:'requestsList',component:RequestlistComponent},
  {path:'updateRequest',component:UpdaterequestComponent},
  {path:'updateCustomers',component:UpdatecustomerComponent}
  // {path:'updateCustomerDetails',component:UpdatecustomerdetailsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }