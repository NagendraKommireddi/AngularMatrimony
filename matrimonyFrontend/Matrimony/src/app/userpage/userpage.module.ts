import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatButtonModule,MatCheckboxModule,MatInputModule,MatNativeDateModule,MatSidenavModule,MatCardModule,MatFormFieldModule, MatCard} from '@angular/material'
import {MatRadioModule,MatExpansionModule,MatListModule,MatDialogModule,MatGridListModule,MatSelectModule, MatDatepickerModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [
    MDBBootstrapModule.forRoot(),
    MatRadioModule,MatStepperModule,MatExpansionModule,MatBadgeModule, MatListModule,MatSelectModule,MatGridListModule,MatCheckboxModule,NoopAnimationsModule,MatDatepickerModule,MatNativeDateModule,CommonModule,MatButtonModule,MatInputModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule],
    exports:[MatRadioModule,MatStepperModule,MatExpansionModule,MatBadgeModule,MatListModule,MatCheckboxModule,MatGridListModule,MatSelectModule,NoopAnimationsModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatInputModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule],
    schemas: [ NO_ERRORS_SCHEMA ],
    declarations: []
  })
export class UserpageModule { 

}
