import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {StorageServiceModule} from 'angular-webstorage-service';
import {FirebaseModule, FirebaseProvider} from 'angular-firebase'
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import {AuthenticationService} from './authentication.service'
import {AuthgaurdService} from './authgaurd.service'
import { HomeComponent } from './home/home.component';
import {HomeModule} from './home/home.module';
import {RegisterModule} from './register/register.module';
import {UserpageModule} from './userpage/userpage.module'
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { PartnerpreferenceComponent } from './partnerpreference/partnerpreference.component';
import { PaymentComponent } from './payment/payment.component';
import {HttpClientModule} from '@angular/common/http'
import {HttpModule} from '@angular/http'
import { RemodelPipe } from './remodel.pipe';
import {
  MatToolbarModule,MatTooltipModule,MatIconModule
} from '@angular/material';

import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UserpageComponent,DialogOverviewExampleDialog, ImageUpload } from './userpage/userpage.component';
import { OtpComponent } from './otp/otp.component';
import { NotificationComponent } from './notification/notification.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  //  HomeDailogLogin,
  //  DialogRegister,
  
    RegisterComponent,
    PartnerpreferenceComponent,
    PaymentComponent,
    ForgetpasswordComponent,
    UserpageComponent,
    RemodelPipe,
    OtpComponent,
    DialogOverviewExampleDialog,
    NotificationComponent,
    ImageUpload
  ],
//  entryComponents: [HomeDailogLogin,DialogRegister],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    AppRoutingModule,
    RegisterModule,
    HttpClientModule,
    MatToolbarModule,MatTooltipModule,MatIconModule,
    MatMenuModule,
    UserpageModule,
    StorageServiceModule,
    MDBBootstrapModule.forRoot()
  ],
  entryComponents:[DialogOverviewExampleDialog,ImageUpload],
  providers: [
    AuthenticationService,AuthgaurdService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
