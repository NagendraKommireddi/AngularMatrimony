import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient}from '@angular/common/http'
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
users:any
  constructor(private router:Router,private http:HttpClient) { 
    
  if(!sessionStorage.getItem('Gender')){
    this.router.navigateByUrl('/home')
  }
  }

  ngOnInit() {
    this.getuserdata().subscribe((data=>{
      this.users=data
    }));
  }
  getuserdata():any{
    return this.http.get<any>("http://localhost:60739/api/Matrimony/Liked/"+sessionStorage.getItem('Phone'))
     }

}
