import { Component, OnInit,Inject, Injectable, ElementRef } from '@angular/core';

import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {FormGroup,FormBuilder,FormControl,Validators, EmailValidator} from '@angular/forms'
import { tap, catchError,map, filter } from 'rxjs/operators';
import {Http,Response} from '@angular/http';

import { Router } from '../../../node_modules/@angular/router';
import { ViewChild } from '@angular/core';

import {AuthenticationService} from '../authentication.service'
import { sessionStorageFactory } from '../../../node_modules/angular-webstorage-service';
import { validateConfig } from '../../../node_modules/@angular/router/src/config';
//import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
//import { Key } from '../../../node_modules/protractor';


export interface LoginData {
  username: string;
  password: string;
}
export interface MotherTongue{
  value:string
  viewValue:string
}

export interface RegisterData{
  ProfileFor:string;
  Name:string;
  Gender:string;
  DOB:Date;
  Religion:string;
  MotherTongue:string;
  Phone:number;
  EmailId:string;
  Password:string;
}

@Injectable({
  providedIn:"root"
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

@ViewChild('myInput')
myInputVariable:ElementRef
fileToUpload: File = null;
  url:string
  LoginForm: any;
  RegisterForm:any;
  public data:any=[];
  Gender:string
  Paid:string
  languages:MotherTongue[]=[
    {value:"Telugu",viewValue:'Telugu'},
    {value:'English',viewValue:'English'},
    {value:'Hindi',viewValue:'Hindi'}
  ]

  emailPattern: any= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private formbuilder:FormBuilder,private router:Router, private authenticationService: AuthenticationService,private http:HttpClient) {}
  ngOnInit() {
    this.LoginForm=this.formbuilder.group({
      'UserName':['',Validators.required],
      'password':['',Validators.required]
    });
    this.RegisterForm=this.formbuilder.group({
      'ProfileFor':['',Validators.required],
      'Name':['',Validators.required],
      'Gender':['',Validators.required],
      'DOB':['',Validators.required],
      'Image':[''],
      'Religion':['',Validators.required],
      'MotherTongue':['',Validators.required],
      'Phone':['',Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+')])],
      'EmailId':['',Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])],
      'Password':['',Validators.required]
    });
    // const formData: FormData = new FormData();
    
    // this.formbuilder['Image'].append('Image', this.fileToUpload,this.fileToUpload.name);
    // this.authenticationService.logout()
  }
  
  Submit(){
    console.log("--------");
    console.log(this.RegisterForm.value.Image)
  this.saveEmployee(this.RegisterForm.value)  
  .subscribe((data) => {    
    if(data!='0'){
    sessionStorage.setItem('Gender',this.RegisterForm.value.Gender)
    sessionStorage.setItem('Name',this.RegisterForm.value.Name)
    sessionStorage.setItem('Phone',this.RegisterForm.value.Phone)
    this.router.navigateByUrl('/register');  
      window.location.reload();
  }
  else{
   window.alert("Some errors occurred")   
  }
})
  // {  
  //   sessionStorage.setItem('Gender',this.RegisterForm.value.Gender)
  //   this.router.navigateByUrl('/register'); 
  // }

}   
  saveEmployee(data) {  

    return this.http.post("http://localhost:60739/api/Matrimony/basic", data).pipe(  
        map((response: Response) => response.toString()) ); 
      }  
   getEmployee(name:string,pwd:string){
     console.log("http://localhost:60739/api/Matrimony/"+ name +"/"+ pwd);
     return this.http.get("http://localhost:60739/api/Matrimony/"+name+"/"+pwd)
   }   

  Login(){
    console.log(this.LoginForm.value.UserName,this.LoginForm.value.password);
    // console.log(this.getEmployee(this.LoginForm.value.UserName,this.LoginForm.value.password )  
    // .subscribe((data) => {    
    // }))
    this.getEmployee(this.LoginForm.value.UserName,this.LoginForm.value.password )  
    .subscribe((data) => {
      console.log(data)
      if(data['length']){
        console.log("------>######",data,data[0]['LikedProfiles']);
        console.log("---->",data[0]['Page1'],data[0]['Page2'],data[0]['Page3'])
        if(data[0]['Page1']==0&&data[0]['Page2']==0&&data[0]['Page3']==0){
          console.log('if-1')
          sessionStorage.setItem('Index','1')
          this.router.navigateByUrl("/register")
          window.location.reload();
        }
        if(data[0]['Page1']==1&&data[0]['Page2']==0&&data[0]['Page3']==0){
          console.log('if-2')
          sessionStorage.setItem('Index','2')
          this.router.navigateByUrl("/register")
         window.location.reload();
        }
        if(data[0]['Page1']==1&&data[0]['Page2']==1&&data[0]['Page3']==0){
          console.log('if-3')
          sessionStorage.setItem('Index','3')
          this.router.navigateByUrl("/register")
          window.location.reload();
        }
        if(data[0]['Page1']==1&&data[0]['Page2']==1&&data[0]['Page3']==1){
          console.log('if-4')
          sessionStorage.setItem('Index','1')
          this.router.navigateByUrl("/userpage")
          window.location.reload();
        }
        sessionStorage.setItem('Phone',data[0]['Phone']);
        sessionStorage.setItem('Gender',data[0]['Gender']);
        sessionStorage.setItem('Paid',data[0]['Paid']);
        sessionStorage.setItem('Name',this.LoginForm.value.UserName)
        sessionStorage.setItem('Liked',data[0]['LikedProfiles']);
        sessionStorage.setItem('ImageUrls',data[0]['Image']);
        
       
      // console.log('--------->');
      // console.log(data[0]['Gender'],data[0]['Paid'])
      }    
      else{
        window.alert("enter valid credentials");
      }
    }) 
      // sessionStorage.setItem('isLoggedIn','true');
      // sessionStorage.setItem('token',this.LoginForm.value.UserName)
     
      //this.authenticationService.login(this.LoginForm.value.UserName, this.LoginForm.value.password);
    }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.fileToUpload = event.target.files[0];
      console.log(this.fileToUpload);
      reader.onload = (event: ProgressEvent) => {
        this.url= (<FileReader>event.target).result;
        this.RegisterForm.patchValue({
          Image:reader.result
        })
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  clear(event:any){
    //var reader=new FileReader();
    //reader.onload = (event: ProgressEvent) => {
      if(this.url !=null){
       this.url=null
      }
      this.myInputVariable.nativeElement.value = "";
    }

  // onNoClick(){
  //   this.router.navigateByUrl("/userpage")
  // }
  // onYesClick(){
  //   this.router.navigateByUrl("/register")
  // }
}

