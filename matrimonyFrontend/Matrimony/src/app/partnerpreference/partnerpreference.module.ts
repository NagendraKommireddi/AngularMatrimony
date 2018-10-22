import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatCheckboxModule,MatInputModule,MatNativeDateModule,MatSidenavModule,MatCardModule,MatFormFieldModule, MatCard} from '@angular/material'
import {MatRadioModule,MatDialogModule,MatGridListModule,MatSelectModule, MatDatepickerModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { MatFileUploadModule } from 'angular-material-fileupload';
//import {  } from 'rxjs/observable/merge'

//import { Browser } from '../../../node_modules/protractor';

@NgModule({
  imports: [
  MatRadioModule,MatSelectModule,MatGridListModule,MatCheckboxModule,NoopAnimationsModule,MatDatepickerModule,MatNativeDateModule,CommonModule,MatButtonModule,MatInputModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule],
  exports:[MatRadioModule,MatCheckboxModule,MatGridListModule,MatSelectModule,NoopAnimationsModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatInputModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule],
  declarations: []
})
export class PartnerpreferenceModule { }
