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
    this.displayPage = "ingame";
  }

  redirectHandler(newState: string) {
    switch(newState) {
      case "login": this.toLogin(); break;
      case "title": this.toTitle(); break;
      case "lobby": this.toLobby(); break;
      case "ingame": this.toGame(); break;
    }
  }
  toLogin() : void {
    this.displayPage = "login";
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
