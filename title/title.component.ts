import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  loggedIn: boolean;
  username: string;
  nickname: string;

  constructor() { 
    this.loggedIn = false;
    this.username = "";
    this.nickname = "";
  }

  sendLogin() {

  }
  checkLogin() {
    
  }

  ngOnInit(): void {
  }

}
