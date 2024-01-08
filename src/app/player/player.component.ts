import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  @Input() player!: Player;
  @Input() highlight: boolean = false;
  playerImages: string[] = ['yellow.png', 'pink.png', 'red.png', 'blue.png'];

  
  getPlayerImage(): string {
    return `assets/${this.playerImages[this.player.id - 1]}`;
  }

  getPlayerId(id: number) {
    return `Player-${id}`
  }
}

export interface Player {
  id: number;
  position: number;
}


//highlight current player
//two players in same cell
