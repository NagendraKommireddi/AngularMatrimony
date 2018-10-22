import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService  implements CanActivate{

  constructor(private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
let url:string=state.url;
return this.verifylogin(url);
  }
verifylogin( url):boolean{
        if(!this.isLoggedIn()){ 
              this.router.navigateByUrl('/home')  
              return false;
        }
        else if(this.isLoggedIn()){
              return true
          }}
public isLoggedIn():boolean{
  let status = false;
  if( sessionStorage.getItem('isLoggedIn') == "true"){
    status = true;
  }
  else{
    status = false;
  }
  return status;
}
}
