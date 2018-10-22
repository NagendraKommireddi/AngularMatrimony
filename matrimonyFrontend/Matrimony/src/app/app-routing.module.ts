import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import  {RegisterComponent} from './register/register.component'
import { HomeComponent } from './home/home.component';
import {PartnerpreferenceComponent} from './partnerpreference/partnerpreference.component'
import {PaymentComponent} from './payment/payment.component'
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component'
import {UserpageComponent} from './userpage/userpage.component'
import {OtpComponent}from './otp/otp.component'
import {NotificationComponent} from './notification/notification.component'
const routes: Routes = [
  {path:'',redirectTo:'/home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent },
  {path:'register', component: RegisterComponent },
  {path:'preference',component:PartnerpreferenceComponent},
  {path:'payment',component:PaymentComponent},
  {path:'userpage',component:UserpageComponent},
  {path:'forget',component:ForgetpasswordComponent},
  {path:'otp',component:OtpComponent},
  {path:'notification',component:NotificationComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
