import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean = false;
  currentUser:User;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
    });
    this.accountService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  logout(){
    this.accountService.Logout();
  }

}