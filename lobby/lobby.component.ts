import { Component, OnInit, Input, Output, EventEmitter, NgModule} from '@angular/core';

//import { TextchatComponent } from '../textchat/textchat.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  players : string[];
  leftPlayers : string[];
  rightPlayers : string[];

  @Output() redirectChange: EventEmitter<string> =   new EventEmitter();

  constructor() {
    this.players = new Array(10).fill('');
    this.leftPlayers = new Array(5).fill('');
    this.rightPlayers = new Array(5).fill('');
    this.players[0] = "You";
    this.sortPlayers();
  }

  sortPlayers(): void {
    for(let i = 0; i<5; i++) {
      this.leftPlayers[i] = this.players[i];
      this.rightPlayers[i] = this.players[i+5];
    }
  }

  toTitle(): void {
    if(confirm("Are you sure you want to leave?") == true) {
      location.href = "index.php";
    }
  }
  toGame(): void {
    if(confirm("Are you sure you want to start the Game?") == true) {
      this.redirectChange.emit("ingame");
    }
  }

  ngOnInit(): void {
  }

}
