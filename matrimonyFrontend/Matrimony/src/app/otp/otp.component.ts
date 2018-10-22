import { Component, OnInit } from '@angular/core';
import {HttpClient,} from '@angular/common/http'
import { timer } from 'rxjs';
// import {take} from 'rxjs/operators'
//import 'rxjs/add/observable/timer'
import { FormGroup, FormBuilder,Validators } from '../../../node_modules/@angular/forms';
import { map, take, ignoreElements } from 'rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
OtpForm:any
countDown;
count:number=0;
counter:number
tick = 1000;
  constructor(private http:HttpClient,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.OtpForm=this.formbuilder.group({
      'PhoneNo':['',Validators.required],
      'Otp':['',Validators.required],
    }    
  );
}
GenerateOtp(){
  console.log("------>")

  sessionStorage.setItem('PhoneNo',this.OtpForm.value.PhoneNo)
  console.log('---------->',sessionStorage.getItem('PhoneNo'))
  console.log(this.OtpForm.value.PhoneNo)
  if(this.OtpForm.value.PhoneNo){
    this.count++;
    console.log(this.count);
    this.Otpgenerate()  
    .subscribe((data) => {    
      console.log(data)
      if(data){
        this.counter = 60;
         this.countDown =timer(0, this.tick).pipe(
       take(this.counter),
        map(() => --this.counter))
      }
    } 
  ) 
//  this.counter = 60;
//  this.countDown =timer(0, this.tick).pipe(
//    take(this.counter),
//    map(() => --this.counter))
if(this.counter==0){
  document.getElementById('Otp').removeAttribute('disabled')
}
  }
    else{
      window.alert('Please enter the Phoneno')
    }
}
Submit(){
console.log(this.OtpForm.value.Otp);

console.log(sessionStorage.getItem('PhoneNo'))
if(this.OtpForm.value.Otp){
this.OtpVerify().
  subscribe((data) =>{
 if(data){
   this.router.navigateByUrl('/forget')
   }
   else{
     window.alert("Otp not matched")
   }
})}
else{
  window.alert("Pleaase enter the  Otp")
}
}
OtpVerify(){
return this.http.get<any>("http://localhost:60739/api/Matrimony/VerifyOtp/"+this.OtpForm.value.Otp).pipe(  
  map((response: Response) =>response));
}

Otpgenerate(){
  return this.http.get<any>("http://localhost:60739/api/Matrimony/SendOtp/"+this.OtpForm.value.PhoneNo).pipe(  
    map((response: Response) =>response)); 
}

}
