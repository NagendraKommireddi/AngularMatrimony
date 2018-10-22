import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,MatCardModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    MatCardModule,FormsModule,ReactiveFormsModule
  ],
  declarations: []
})
export class ForgetpasswordModule { }
