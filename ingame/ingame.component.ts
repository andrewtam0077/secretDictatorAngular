import { Component, OnInit, Input, Output, EventEmitter, NgModule} from '@angular/core';

@Component({
  selector: 'app-ingame',
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {

  @Output() redirectChange: EventEmitter<string> =   new EventEmitter();

  constructor() { }

  toTitle(): void {
    if(confirm("Are you sure you want to leave?") == true) {
      this.redirectChange.emit("lobby");
    }
  }

  ngOnInit(): void {
  }

}
