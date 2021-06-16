import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

interface Message {
  nickname: string;
  text: string | null;
}

@Component({
  selector: 'app-textchat',
  templateUrl: './textchat.component.html',
  styleUrls: ['./textchat.component.css']
})
export class TextchatComponent implements OnInit {
  nickname: string;
  textlog: string[];
  currentMsg: string | null;
  errMsg: string | null;


  testList: Array<string> = [];

  constructor(private http: HttpClient) {
    this.nickname = "nickname";
    this.textlog = [];
    this.currentMsg = "";
    this.errMsg = null;
  }

  checkChat(): void {

  }
  sendText(): void {
    if(this.currentMsg != "" && this.currentMsg != " ") {
      this.errMsg = "Please Enter Text";
    }

    let sendData = JSON.stringify([this.nickname, this.currentMsg]);
    this.currentMsg = null;
    console.log("SEND: " + sendData);

    this.http.get<any>('http://localhost/php-files/distributeChat.php?newMsg='+sendData).subscribe(
        (data) => {
          //what to do with the response
          console.log(data);
          //console.log(JSON.parse(data));
          this.textlog = data;

          this.errMsg = null;
        }, (error)=>{
          // handle error if we get an error response
          console.log('Error: ', error);
        }
      );
  }

  ngOnInit(): void {
  }

}
