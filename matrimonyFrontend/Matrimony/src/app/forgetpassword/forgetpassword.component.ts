import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators ,AbstractControl} from '../../../node_modules/@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  ForgetForm:any
  Phone:any=sessionStorage.getItem('PhoneNo')

  emailPattern: any= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit() {

    this.ForgetForm=this.formbuilder.group({
      'PhoneNo':[this.Phone],
      'NewPassword':['',Validators.required],
      'ConfirmPassword':['',Validators.required ]
    }
    // ,{
    //   validator: this.MatchPassword // your validation method
    // }
  );
  }
forget(){
  console.log(this.ForgetForm.value.PhoneNo)
  
  if(this.ForgetForm.value.NewPassword==this.ForgetForm.value.ConfirmPassword)
  {this.forgetpassword(this.ForgetForm.value)  
  .subscribe((data) => { 
      window.alert("PasswordChanged succesfully")
      this.router.navigateByUrl('/home')
  })}
  else{
    window.alert("Password and ConfirmPassword should Match");
  }
}
forgetpassword(data){
  return this.http.put("http://localhost:60739/api/Matrimony/forgetpassword", data).pipe(  
    map((response: Response) => response) ); 
}










//    MatchPassword(AC: AbstractControl) {
//     let password = AC.get('password').value; // to get value in input tag
//     let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
//      if(password != confirmPassword) {
//          console.log('false');
//          AC.get('confirmPassword').setErrors( {MatchPassword: true} )
//      } else {
//          console.log('true');
//          return null
//      }
//  }

}
