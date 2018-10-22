import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { localStorageFactory } from '../../node_modules/angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(){}


logout() {
    // remove user from local storage to log user out
    sessionStorage.setItem('isLoggedIn','false')
    sessionStorage.removeItem('token')
    console.log(sessionStorage)
}

}
