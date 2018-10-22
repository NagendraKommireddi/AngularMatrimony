import { Component, OnInit ,ViewChild} from '@angular/core';
import {RequestOptions,Headers,Http,Response}from '@angular/http'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient,} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
import {MatStepper} from '@angular/material'
import { forEach } from '../../../node_modules/@angular/router/src/utils/collection';
import { element } from '../../../node_modules/protractor';
import { debug } from 'util';
import { sessionStorageFactory } from '../../../node_modules/angular-webstorage-service';
//import { Imagesrc } from '../userpage/userpage.component';

export interface Height{
  value:string
  viewValue:string
}
export interface Country{
  value:string
  viewValue:string
}
export interface Star{
  value:string
  viewValue:string
}
export interface Rasi{
  value:string
  viewValue:string
}
export interface MotherTongue{
  value:string
  viewValue:string
}
export interface SetProfile{
  Url:string
  Phone:string
}
export interface Imagesrc{
src:string
value:string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @ViewChild('stepper') stepper: MatStepper;
 
url:string;
index:string;
name:string;
urlstring:string
setprofile:SetProfile[]=[]
Images:string=sessionStorage.getItem('ImageUrls');
TotalImages=this.Images.split(',');
selected:any
imgsrc:Imagesrc[]=[]
languages:MotherTongue[]=[
  {value:"telugu",viewValue:'Telugu'},
  {value:'english',viewValue:'English'},
  {value:'hindi',viewValue:'Hindi'}
]
  Heights:Height[]=[
    {value:"150",viewValue:"5ft 0 in"},
    {value:"152",viewValue:"5ft 1 in"},
    {value:"154",viewValue:"5ft 3 in"},
    {value:"156",viewValue:"5ft 4 in"},
    {value:"158",viewValue:"5ft 5 in"},
    {value:"160",viewValue:"5ft 6 in"},
  ];

  Countries:Country[]=[
    {value:"India",viewValue:'India'},
    {value:'Usa',viewValue:'Usa'},
    {value:'China',viewValue:'China'}
  ]
  ngAfterViewInit() {
    this.stepper.selectedIndex = parseInt(this.index); 
  }
  Stars:Star[]=[
    {value:"Ashwini",viewValue:"Ashwini"},
    {value:"Bharani",viewValue:"Bharani"},
    {value:"Kruthika",viewValue:"Kruthika"},
    {value:"Rohini",viewValue:"Rohini"},
    {value:"Mrigasira",viewValue:"Mrigasira"},
    {value:"Artara",viewValue:"Artara"},
    {value:"Punarvasu",viewValue:"Punarvasu"},
    {value:"Pushyami",viewValue:"Pushyami"},
    {value:"Ashlesha",viewValue:"Ashlesha"},
    {value:"Makha",viewValue:"Makha"},
    {value:"Pubba",viewValue:"Pubba"},
    {value:"Uthara",viewValue:"Uthara"},
    {value:"Hastha",viewValue:"Hastha"},
    {value:"Chitha",viewValue:"Chitha"},
    {value:"Swathi",viewValue:"Swathi"},
    {value:"Vishaka",viewValue:"Vishaka"},
    {value:"Anuradha",viewValue:"Anuradha"},
    {value:"Jyeshta",viewValue:"Jyeshta"},
    {value:"Moola",viewValue:"Moola"},
    {value:"Poorvashada",viewValue:"Poorvashada"},
    {value:"Utharashada",viewValue:"Utharashada"},
    {value:"Sravana",viewValue:"Sravana"},
    {value:"Dhanishta",viewValue:"Dhanishta"},
    {value:"Sathabisha",viewValue:"Sathabisha"},
    {value:"Poorvabhadra",viewValue:"Poorvabhadra"},
    {value:"Utharabhadra",viewValue:"Utharabhadra"},
    {value:"Revathi",viewValue:"Revathi"}
  ]

  Rasichakra:Rasi[]=[
    {value:"Arial",viewValue:"Arial"},
    {value:"Taurus",viewValue:"Taurus"},
    {value:"Gemini",viewValue:"Gemini"},
    {value:"Capricorn",viewValue:"Capricorn"},
    {value:"Virgo",viewValue:"Virgo"},
    {value:"Leo",viewValue:"Leo"},
    {value:"Libra",viewValue:"Libra"},
    {value:"Cancer",viewValue:"Cancer"},
    {value:"Saggitarius",viewValue:"Saggitarius"},
    {value:"Scorpio",viewValue:"Scorpio"},
    {value:"Aquarius",viewValue:"Aquarius"},
    {value:"Pisces",viewValue:"Pisces"},

  ]
  // pic1="/assets/images/"+this.Name+"/1.jpg"
  // pic2= "/assets/images/"+sessionStorage.getItem('Name')+"/2.jpg"
  // pic3="/assets/images/"+sessionStorage.getItem('Name')+"/3.jpg"
  

  
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  submit:any
  Phone:{}
  emailPattern: any= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private _formBuilder: FormBuilder,private router:Router,private http:HttpClient,private https:Http) {
    if(!sessionStorage.getItem('Gender')){
      this.router.navigateByUrl('/home')
    }
   
    
  }
  getUsers(){
    //console.log("http://localhost:60739/api/Matrimony");
    console.log(sessionStorage.getItem('Phone'))
    return this.http.get<any>("http://localhost:60739/api/Matrimony").pipe(
     map(data => data.filter(data =>data.Phone===sessionStorage.getItem('Phone'))));
  }   

  ngOnInit() {
    this.index=sessionStorage.getItem('Index');
    //sconsole.log(this.index);
    this.TotalImages.forEach((element)=>{
      this.imgsrc.push(
        {src:"/assets/images/"+sessionStorage.getItem('Name')+"/"+element.trimLeft(),
        value:"/assets/images/"+sessionStorage.getItem('Name')+"/"+element.trimLeft()})
    })

    console.log(this.index,"----->",this.imgsrc,sessionStorage.getItem('ImageUrls'))
    //console.log('------->',sessionStorage.getItem('Name'),"name=="+this.name);
    this.getUsers()  
    .subscribe((data) => {
      console.log(data)
     // console.log(data[0]['MaritalStatus'],"-->",data[0]['Occupation'])
// if(data[0]['Page1']==1){
     this.firstFormGroup=this._formBuilder.group({
        'ProfileFor':[data[0]['Profilefor']],
        'Name':[data[0]['Name']],
        'Gender':[data[0]['Gender']],
        'DOB':[data[0]['DOB']],
        'Image':[data[0]['Image']],
        'Religion':[data[0]['Religion']],
        'MotherTongue':[data[0]['MotherTongue']],
        'Phone':[data[0]['Phone']],
        'EmailId':[data[0]['EmailId']],
        'MaritalStatus':[data[0]['MaritalStatus'],],
        'Height':[data[0]['Height'],],
        'FamilyStatus':[data[0]['FamilyStatus'],],
        'FamilyType':[data[0]['FamilyType'],],
        'FamilyValues':[data[0]['FamilyValues'],],
        'PhysicallyHandicapped':[data[0]['PhysicallyHandicapped'],],
        'Education':[data[0]['Education'],],
        'EmployedIn':[data[0]['EmployedIn'],],
        'Occupation':[data[0]['Occupation'],],
        'AnnualIncome':[data[0]['AnnualIncome'],],
        'LocationCountry':[data[0]['LocationCountry'],],
        'LocationState':[data[0]['LocationState'],],
        'LocationCity':[data[0]['LocationCity'],],
      });
    //}
      this.secondFormGroup = this._formBuilder.group({
        'BodyType':[data[0]['BodyType'],],
        'Weight':[data[0]['Weight'],],
        'Diet':[data[0]['Diet']],
        'SmokingHabit':[data[0]['SmokingHabit'],],
        'DrinkingHabit':[data[0]['DrinkingHabit'],],
        'Star':[data[0]['Star'],],
        'Rasi':[data[0]['Rasi'],],
        'TimeOfBirth':[data[0]['TimeOfBirth'],],
        'PlaceOfBirthCountry':[data[0]['PlaceOfBirthCountry'],],
        'PlaceOfBirthState':[data[0]['PlaceOfBirthState'],],
        'PlaceOfBirthCity':[data[0]['PlaceOfBirthCity'],],
       });
       this.thirdFormGroup=this._formBuilder.group({
        'FatherOccupation':[data[0]['FatherOccupation'],],
        'MotherOccupation':[data[0]['MotherOccupation'],],
        'Brothers':[data[0]['Brothers'],],
        'BrothersMarried':[data[0]['BrothersMarried'],],
        'Sisters':[data[0]['Sisters'],],
        'SistersMarried':[data[0]['SistersMarried']],
        'ParentsContact':[data[0]['ParentsContact'],],
        'AncestralOrigin':[data[0]['AncestralOrigin'],],
       })
       
    });

    this.firstFormGroup = this._formBuilder.group({
      // inserted data
      'ProfileFor':['',],
      'Name':['',],
      'Gender':['',],
      'DOB':['',],
      'Image':[''],
      'Religion':['',],
      'MotherTongue':['',],
      'Phone':['',],
      'EmailId':['',],
      'Password':['',],
      //inserted data
      'MaritalStatus': ['',],
      'Height':['',],
      'FamilyStatus':['',],
      'FamilyType':['',],
      'FamilyValues':['',],
      'PhysicallyHandicapped':['',],
      'Education':['',],
      'EmployedIn':['',],
      'Occupation':['',],
      'AnnualIncome':['',],
      'LocationCountry':['',],
      'LocationState':['',],
      'LocationCity':['',],

    });
    this.secondFormGroup = this._formBuilder.group({
     'BodyType':['',],
     'Weight':['',],
     'Diet':[''],
     'SmokingHabit':['',],
     'DrinkingHabit':['',],
     'Star':['',],
     'Rasi':['',],
     'TimeOfBirth':['',],
     'PlaceOfBirthCountry':['',],
     'PlaceOfBirthState':['',],
     'PlaceOfBirthCity':['',],
    });
    this.thirdFormGroup=this._formBuilder.group({
      'FatherOccupation':['',],
      'MotherOccupation':['',],
      'Brothers':['',],
      'BrothersMarried':['',],
      'Sisters':['',],
      'SistersMarried':[''],
      'ParentsContact':['',],
      'AncestralOrigin':['',],
    })
  }
selection:string
  redirect(){
  this.router.navigateByUrl('/preference');
  console.log(this.selection)
  }
  // onclick(event:any){
  //   console.log(event,event['value'])
  //   console.log("-->",this.index)
  // }
  firstpage(){
    console.log("--->",this.firstFormGroup.value)
    this.Phone={
      "Phone":sessionStorage.getItem('Phone'),
      "Page1":1,
      // "Page2":null,
      // "Page3":null
    }
    this.submit=Object.assign(this.firstFormGroup.value,this.Phone,this.secondFormGroup.value,this.thirdFormGroup.value)
    this.registeruser(this.submit).subscribe(data=>{
      console.log(data)
      if(data==1){
        alert("Changes Have Been Done")
      }})
  }
  secondpage(){
    console.log("---->",this.secondFormGroup.value)
    this.Phone={
      "Phone":sessionStorage.getItem('Phone'),
      "Page1":1,
      "Page2":1,
      // "Page3":null,
    }
    this.submit=Object.assign(this.secondFormGroup.value,this.Phone,this.firstFormGroup.value,this.thirdFormGroup.value)
    console.log(this.submit)
    this.registeruser(this.submit).subscribe(data=>{
      console.log(data)
      if(data==1){
        alert("Changes Have Been Done")
      }})
  }
  thirdpage(){
    console.log("---->",this.thirdFormGroup.value)
    this.Phone={
      "Phone":sessionStorage.getItem('Phone'),
      "Page1":1,
      "Page2":1,
      "Page3":1,
    }
    this.submit=Object.assign(this.thirdFormGroup.value,this.Phone,this.firstFormGroup.value,this.secondFormGroup.value)
    console.log(this.submit)
    this.registeruser(this.submit).subscribe(data=>{
      console.log(data)
      if(data==1){
        alert("Changes Have Been Done")
      }})
  }
formSubmit(){
this.Phone={
  "Phone":sessionStorage.getItem('Phone'),
  "Page1":1,
  "Page2":1,
  "Page3":1
}
this.submit=Object.assign(this.firstFormGroup.value,this.Phone,this.secondFormGroup.value,this.thirdFormGroup.value)
console.log("----->",this.firstFormGroup.value,typeof(this.submit))
this.registeruser(this.submit).subscribe(data=>{
  console.log(data)
  if(data==1){
    alert("Changes Have Been Done")
  }
})
}

registeruser(data:any):any{
  console.log(this.http.post("http://localhost:60739/api/Matrimony/Extra", data))
  return this.http.post("http://localhost:60739/api/Matrimony/Extra", data).pipe(  
    map((response: Response) => response) ); 
}

imageclick(event){
  console.log(event.target.src)
//console.log(event.path[0].src)

this.setprofile=[
  {Url:event.path[0].src,Phone:sessionStorage.getItem('Phone')
  }]
 console.log("!@#@!-->",typeof(this.setprofile))
this.setuser(this.setprofile).subscribe(data=>{
  console.log(data);
})
}
setuser(data:any):any{
  
console.log("--->@@",this.setprofile,typeof(this.setprofile),
this.http.post("http://localhost:60739/api/Matrimony/SetProfile",data
))
  return this.http.post("http://localhost:60739/api/Matrimony/SetProfile",data);
}
  dummy(){
    console.log("redirecting")
  }
  image(event){
    console.log(event)
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
    this.selected=event.target.files[0];      
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
  }
  upload(){
    console.log("------->",this.selected);
    let formData: FormData = new FormData();  
    formData.append(sessionStorage.getItem('Name')+',UploadedFile', this.selected, this.selected.name);  
    let headers = new Headers()   
    let options = new RequestOptions({ headers: headers });  
    let apiUrl1 = "http://localhost:60739/api/Matrimony/Upload";  
    this.https.post(apiUrl1, formData, options)
    .subscribe(  
    data => {
      console.log('success')
      if(data){
        window.alert("ProfilePic Added")
      }
      }, 
    error => {console.log(error)  
    }  
  )


  }
}
