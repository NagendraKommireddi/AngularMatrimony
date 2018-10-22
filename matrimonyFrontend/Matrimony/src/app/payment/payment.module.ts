import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatCheckboxModule,MatInputModule,MatNativeDateModule,MatSidenavModule,MatCardModule,MatFormFieldModule, MatCard} from '@angular/material'
import {MatRadioModule,MatDialogModule,MatSelectModule, MatDatepickerModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { MatFileUploadModule } from 'angular-material-fileupload';
//import {  } from 'rxjs/observable/merge'

//import { Browser } from '../../../node_modules/protractor';

@NgModule({
  imports: [
  MatRadioModule,MatStepperModule,MatSelectModule,MatCheckboxModule,NoopAnimationsModule,MatDatepickerModule,MatNativeDateModule,CommonModule,MatButtonModule,MatInputModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule],
  exports:[MatRadioModule,MatStepperModule,MatCheckboxModule,MatSelectModule,NoopAnimationsModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatInputModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule],
  declarations: []
})
export class PaymentModule { }
