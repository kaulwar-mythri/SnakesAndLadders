import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SnakesAndLadders';
  boardCells: number[] = Array.from({ length: 100 }, (_, index) => index + 1);
  players: Player[] = [];
  playerImages: string[] = ['yellow.png', 'pink.png', 'red.png', 'blue.png'];
  currentPlayer!: Player;

  snakesAndLadders: { start: number; end: number; type: string }[] = [];

  numberOfPlayers!: number | null;

  constructor(private route: ActivatedRoute) {
    this.initialize();
  }

  initialize() {
    this.route.paramMap.subscribe(params => {
      const playersParam = params.get('players');
      this.numberOfPlayers = playersParam ? +playersParam : null;
    });
    if(this.numberOfPlayers) {
      for(let i=0; i<this.numberOfPlayers; i++) {
        this.players.push({id: i+1, position: 0});
      }
      console.log(this.players);
      
    }
  }


  ngOnInit() {
    this.currentPlayer = this.players[0];
    
    this.generateSnakesAndLadders();
  }

  getCurrentPlayerImage(): string {
    return `assets/${this.playerImages[this.currentPlayer.id - 1]}`;
  }

  generateSnakesAndLadders() {
    const numSnakes = 5; 
    const numLadders = 6;
    const maxPosition = this.boardCells.length;

    for (let i = 0; i < numSnakes; i++) {
      const start = this.getRandomPosition(maxPosition);
      const end = this.getRandomPosition(start);
      if(start != 1)
        this.snakesAndLadders.push({ start, end, type: 'snake' });
    }

    for (let i = 0; i < numLadders; i++) {
      let start = this.getRandomPosition(maxPosition);
      let end = this.getRandomPosition(maxPosition - start) + start;
  
      while (start % 10 === 0 && end % 10 === 0 && start == 1) {
        start = this.getRandomPosition(maxPosition);
        end = this.getRandomPosition(maxPosition - start) + start;
      }
  
      this.snakesAndLadders.push({ start, end, type: 'ladder' });
    }
  }

  getRandomPosition(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }

  handleDiceRoll(diceValue: number) {
    const currentPlayer = this.players[0]; 
    const newPosition = currentPlayer.position + diceValue;

    const snakeOrLadder = this.snakesAndLadders.find(sl => sl.start === newPosition);
    if (snakeOrLadder) {
      currentPlayer.position = snakeOrLadder.end;
    } else {
      currentPlayer.position = newPosition;
    }

    currentPlayer.position = Math.min(currentPlayer.position, this.boardCells.length - 1);
    if(currentPlayer.position >= 99) {
      var victory = new Audio("./assets/victory.mp3");
      victory.play();
      alert("Congratulations, " + currentPlayer.id + " won!");
      this.initialize();
    }
    // this.snakesAndLadders = [];
    // this.generateSnakesAndLadders();
    this.players.push(this.players.shift()!);
  }
}

interface Player {
  id: number;
  position: number;
}
