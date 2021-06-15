import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Secret Dictator';
  displayPage : string;

  constructor(private http: HttpClient) { //
    this.displayPage = "title";
  }

  toRegister() : void {
    this.displayPage = "register";
  }
  toTitle() : void {
    this.displayPage = "title";
  }
  toLobby() : void {
    this.displayPage = "lobby";
  }
  toGame() : void {
    this.displayPage = "ingame";
  }
}
