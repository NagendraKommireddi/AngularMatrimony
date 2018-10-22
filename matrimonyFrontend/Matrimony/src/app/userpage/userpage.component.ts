import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders } from '@angular/common/http';
//import { Http, RequestOptions, Headers, Response } from '@angular/http';  
import {RequestOptions,Headers,Http,Response}from '@angular/http'
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ViewChild} from '@angular/core'
import {FormBuilder,FormGroup}from '@angular/forms'
import {MatSelectionList} from '@angular/material'
import {Router} from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {  MatSelectionListChange, MatListOption } from '@angular/material';

import {DomSanitizer} from '@angular/platform-browser';
import {map, filter} from 'rxjs/operators'

export interface user{  
DOB:Date;
EmailId:string;
Gender:string
MotherTongue:string
Name:string
Password:string
Phone:string
Profilefor:string
Religion:string
Image:string
}
export interface Imagesrc{
src:string
}

export class Checker{
key:string
valuek:string
}

export interface MyObject {
  [key: string]: string;
}

@Component({
  selector: 'app-userpage',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})

export class UserpageComponent implements OnInit {
Checker:string
badgenumber=sessionStorage.getItem('Liked');
//location: Location;
users:any
name:any
selection={}
list:Checker[]=[]
images:Imagesrc[]=[]
  marritalStatusArr = ["nevermarried","divorced","awaitingdivorce"];
  motherTongueArr = ["telugu","hindi","english","kannada"];
  physicallyHandicappedArr = ["yes","no"];
  dietArr = ["veg","nonveg","eggeterian"];
  smokingHabitArr = ["yes","no"];
  drinkingHabitArr = ["yes","no"];
  bodyTypeArr = ["slim","athletic","average","heavy"];
  //skinTypeArr = ["very-fair","fair","wheatish","dark"];
  constructor(private location: Location,private http:HttpClient,private _bypass:DomSanitizer,public dialog: MatDialog,private router:Router) {

  if(!sessionStorage.getItem('Gender')){
    this.router.navigateByUrl('/home')
  }

    }
  ngOnInit() {
    this.getuserdata(sessionStorage.getItem('Gender')).subscribe((data=>{
      this.users=data
    }));
    this.name=sessionStorage.getItem('Name')
    console.log('------->',sessionStorage.getItem('Gender'));
    console.log(sessionStorage.getItem('ImageUrls'));
}
  getuserdata(Gender:string):any{
    return this.http.get<any>("http://localhost:60739/api/Matrimony").pipe(
      map(data => data.filter(data =>data.Gender!==Gender)));
     }

     navigations(route:string){
       console.log('/'+route)
    this.router.navigateByUrl('/'+route); 
    }
     
  listchange(e,name:string) {
     console.log("---->",e)
     //console.log(this.selection);
    if(e.length){
      console.log("--->###",this.selection,typeof(this.selection));
     for(let i of e){
        this.userdata(name,i.value)
      //   .subscribe((       
      //     data=>{
      //      this.users=data
      //    console.log(this.users) 
      //    })
      //  );
        //this.userdata(name,i.value)
     }
    }
     else{
       this.getuserdata(sessionStorage.getItem('Gender')).subscribe((data=>this.users=data));
     }
  }
   userdata(Checker:string,name:string){
     console.log("=========>",Checker,name)
     this.list.push({
       key:Checker,valuek:name
     })
     console.log(this.list,"<--------")
     //console.log(this.indexedArray{Checker,name})
    //  console.log(this.http.get<any>("http://localhost:60739/api/Matrimony").pipe(
    //   map(data => data.filter(data=>{
    //    data.Gender!==sessionStorage.getItem('Gender')&&
    //    data.MaritalStatus===name} ))))
    this.users=this.users.filter(filter=>filter[Checker]===name)
   
    // return this.http.get<any>("http://localhost:60739/api/Matrimony").pipe(
    //     map(data =>
    //      data.filter(data=>data[Checker]===name &&
    //        data.Gender!==sessionStorage.getItem('Gender')
    //       )));
           //  data.MaritalStatus===this.selection['MaritalStatus']['0'] ,
        //  data.MotherTongue===this.selection['MotherTongue']['0'] ,
        //   data.PhysicallyHandicapped===this.selection['PhysicallyHandicapped']['0']       
    // this.users= this.users.filter(
    //   data=>
    //   {  data=>data[Checker]===name &&
    //       data.Gender!==sessionStorage.getItem('Gender')
    //   }  
       
    // )
    // console.log(this.users)

       
      }
   clearAllOptions(list){
    list.deselectAll();
    // list.patchValue(false);
  }
  
  logout()
  {
    console.log("logout");
    sessionStorage.removeItem('Gender');
    sessionStorage.removeItem('Name');
    sessionStorage.removeItem('Paid');
    sessionStorage.removeItem('Phone');
    sessionStorage.removeItem('Index');
  }

  sendemail(email:string,Phone:string):any{
  console.log(email,sessionStorage.getItem('Name'));
  if(sessionStorage.getItem('Name'))
  {console.log('entered')
  this.mailsending(email,Phone).subscribe((       
    data=>{
      })
   );

  }}
  mailsending(email:string,Phone:string):any{
    console.log("callingg")
    console.log("http://localhost:60739/api/Matrimony/SendEMail/"+sessionStorage.getItem('Name')+"/"+email)  
  return this.http.get<any>("http://localhost:60739/api/Matrimony/SendEMail/"+sessionStorage.getItem('Phone')+"/"+email+"/"+Phone).pipe(
      map((response:Response)=>console.log(response))
    );
  }
  show(name:string){
  //  window.alert("showing");
  console.log(name);  
  sessionStorage.setItem('PicFilter',name);
  if(sessionStorage.getItem('Paid')=='Yes'){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
 //     data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   //   this.animal = result;
    });
  }
  else{
    window.alert("Please have a paid account")
  }
  }
  upload(){
//     const dialogRef = this.dialog.open(ImageUpload, {
//       width: '500px',
//  //     data: {name: this.name, animal: this.animal}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//    //   this.animal = result;
//     });
sessionStorage.setItem('Index','0');
this.router.navigateByUrl('/register');


  }
  handleSelection(event) {
    if (event.option.selected) {
      event.source.deselectAll();
      event.option._setSelected(true);
    } 
  }
notify(){
  console.log('eneterd');
  this.badgenumber="0";
  sessionStorage.removeItem('Liked');
  this.router.navigateByUrl('/notification');
}

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dailog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  //  @Inject(MAT_DIALOG_DATA) public data: DialogData 
  ) {}


//imgsrc=['/assets/images/'+sessionStorage.getItem('Name')+'/1.jpg','/assets/images/'+sessionStorage.getItem('Name')+'/2.jpg','/assets/images/'+sessionStorage.getItem('Name')+'/3.jpg']
imgsrc:Imagesrc[]=[
  {src:'/assets/images/VenkateshChandaka/1.jpg'},
  {src:'/assets/images/VenkateshChandaka/2.jpg'}
]
pic1="/assets/images/"+sessionStorage.getItem('PicFilter')+"/1.jpg"
pic2= "/assets/images/"+sessionStorage.getItem('PicFilter')+"/2.jpg"
pic3="/assets/images/"+sessionStorage.getItem('PicFilter')+"/3.jpg"
onNoClick(): void {
    this.dialogRef.close();
}
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.html',
})
export class ImageUpload implements OnInit {
  selected:any
  ImageForm:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ImageUpload>,private http:Http,private _formBuilder: FormBuilder
  //  @Inject(MAT_DIALOG_DATA) public data: DialogData 
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){

     this.ImageForm=this._formBuilder.group({
       'Image':[]
     })
  }
  url = '';
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
    
    // this.uploaddata(this.selected).subscribe(data=>{
    //   console.log(data);
    // });
    let formData: FormData = new FormData();  
    formData.append('uploadFile', this.selected, this.selected.name);  
    let headers = new Headers()  
    //headers.append('Content-Type', 'json');  
    //headers.append('Accept', 'application/json');  
    let options = new RequestOptions({ headers: headers });  
    let apiUrl1 = "http://localhost:60739/api/Matrimony/Upload";  
    this.http.post(apiUrl1, formData, options)
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
  // uploaddata(selected:any){

  //   return this.http.post("",selected);

 }
