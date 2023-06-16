import { Component } from '@angular/core';
import { ApiService } from '../services/ApiServices';
import { CookieService } from 'ngx-cookie-service';

import {Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // isUserCheck
  UserData : any
  constructor(private apiService: ApiService, private cookieService: CookieService ,private router: Router ) { }

  ngOnInit() {
    let data = localStorage.getItem('UserData');
    this.UserData = JSON.parse(data as string);
    console.log("dddd" ,this.UserData);
    
    
  }

  logout(){
    this.cookieService.deleteAll()
    this.router.navigate(['/login'])
  }
}
