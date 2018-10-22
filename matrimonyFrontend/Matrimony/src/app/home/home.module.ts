import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatTabsModule,MatInputModule,MatNativeDateModule,MatSidenavModule,MatCardModule,MatFormFieldModule, MatCard} from '@angular/material'
import {MatDialogModule,MatSelectModule, MatDatepickerModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';

import { AngularFileUploaderModule } from "angular-file-uploader";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
//import { Browser } from '../../../node_modules/protractor';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  imports: [
  MatSelectModule,MatTabsModule,AngularFileUploaderModule,NoopAnimationsModule,MatDatepickerModule,MatNativeDateModule,CommonModule,MatButtonModule,MatInputModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule],
  exports:[MatSelectModule,MatTabsModule,AngularFileUploaderModule,NoopAnimationsModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatInputModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule],
  declarations: [FileSelectDirective]
})
export class HomeModule { }
