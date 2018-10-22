import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
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

@Component({
  selector: 'app-partnerpreference',
  templateUrl: './partnerpreference.component.html',
  styleUrls: ['./partnerpreference.component.css']
})

export class PartnerpreferenceComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,private router:Router,private http:HttpClient) { 
    if(!sessionStorage.getItem('Gender')){
      this.router.navigateByUrl('/home')
    }
  }
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  submit:any
  Phone:{};

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
  

  ngOnInit() {

    this.getprefered().subscribe(data=>{
      console.log(data)
      this.firstFormGroup=this._formBuilder.group({
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
    })






    this.firstFormGroup = this._formBuilder.group({
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
  }
  firstpage(){
    console.log("--->",this.firstFormGroup.value)
    this.Phone={
      "Phone":sessionStorage.getItem('Phone'),
      "Page1":1,
      // "Page2":null,
      // "Page3":null
    }
    this.submit=Object.assign(this.firstFormGroup.value,this.Phone,this.secondFormGroup.value)
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
    this.submit=Object.assign(this.secondFormGroup.value,this.Phone,this.firstFormGroup.value)
    console.log(this.submit)
    this.registeruser(this.submit).subscribe(data=>{
      console.log(data)
      if(data==1){
        alert("Changes Have Been Done")
      }})
  }
  // thirdpage(){
  //   console.log("---->",this.thirdFormGroup.value)
  //   this.Phone={
  //     "Phone":sessionStorage.getItem('Phone'),
  //     "Page1":1,
  //     "Page2":1,
  //     "Page3":1,
  //   }
  //   this.submit=Object.assign(this.thirdFormGroup.value,this.Phone,this.firstFormGroup.value,this.secondFormGroup.value)
  //   console.log(this.submit)
  //   this.registeruser(this.submit).subscribe(data=>{
  //     console.log(data)
  //     if(data==1){
  //       alert("Changes Have Been Done")
  //     }})
  // }
formSubmit(){
this.Phone={
  "Phone":sessionStorage.getItem('Phone'),
  "Page1":1,
  "Page2":1,
  // "Page3":1
}
this.submit=Object.assign(this.firstFormGroup.value,this.Phone,this.secondFormGroup.value)
console.log("----->",this.submit)
this.registeruser(this.submit).subscribe(data=>{
  console.log(data)
  if(data==1){
    alert("Changes Have Been Done")
  }
})
}

registeruser(data:any):any{
  return this.http.post("http://localhost:60739/api/Matrimony/Preference", data).pipe(  
    map((response: Response) => response) ); 
}

getprefered():any{
return this.http.get("http://localhost:60739/api/Matrimony/prefered/"+sessionStorage.getItem('Phone')).pipe(
  map((response:Response)=>response));
}

}
