import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { DiceComponent } from './dice/dice.component';
import { PlayerComponent } from './player/player.component';
import { BootComponent } from './boot/boot.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DiceComponent,
    PlayerComponent,
    BootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
