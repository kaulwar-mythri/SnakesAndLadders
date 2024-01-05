import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})
export class DiceComponent {
  @Output() diceRolled = new EventEmitter<number>();
  diceValue: number | null = null;
  rolling = false;

  rollDice() {
    if (!this.rolling) {
      this.rolling = true;
      this.diceValue = null;
      var diceSound = new Audio("./assets/dice.mp3")
      diceSound.play();
      setTimeout(() => {
        this.diceValue = Math.floor(Math.random() * 6) + 1;
        this.rolling = false;
        this.diceRolled.emit(this.diceValue);
      }, 1000);
    }
  }
}
