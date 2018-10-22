import { Component,Inject ,OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {AuthenticationService} from './authentication.service'
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string
  private data:any;
  title = 'Matrimony';
  location: Location;
  id:string;
  constructor(location: Location,private authenticationservice:AuthenticationService,private router:Router) { 
    this.location = location; 
    this.name=sessionStorage.getItem('Name')
 
  }
 
//   saveInLocal(key, val): void {
//     console.log('recieved= key:' + key + 'value:' + val);
//     this.storage.set(key, val);
//     this.data[key]= this.storage.get(key);
//    }
// getFromLocal(key): void {
//     console.log('recieved= key:' + key);
//     this.data[key]= this.storage.get(key);
//     console.log(this.data);
//    }
ngOnInit(){

  console.log(this.name,sessionStorage.getItem('Name'))  
}
logout()
{
  console.log("logout");
  // this.authenticationservice.logout();
  sessionStorage.removeItem('Gender');
  sessionStorage.removeItem('Name');
  sessionStorage.removeItem('Phone');
  sessionStorage.removeItem('Paid');
  sessionStorage.removeItem('Index');
  this.router.navigateByUrl('/home');
}
navigations(route:string){
  console.log('/'+route)
this.router.navigateByUrl('/'+route); 
}
}
