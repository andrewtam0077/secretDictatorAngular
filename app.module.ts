import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TitleComponent } from './title/title.component';
import { LobbyComponent } from './lobby/lobby.component';
import { IngameComponent } from './ingame/ingame.component';
import { TextchatComponent } from './textchat/textchat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TitleComponent,
    LobbyComponent,
    IngameComponent,
    TextchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
