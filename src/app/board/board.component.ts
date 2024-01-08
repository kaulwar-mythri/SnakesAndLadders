import { Component, Input } from '@angular/core';
import { Player } from '../player/player.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @Input() cells: number[] = [];
  @Input() players: Player[] = [];
  @Input() snakesAndLadders: { start: number; end: number; type: string }[] = [];


  get rows(): number[][] {
    const rows = [];
    for (let i = 0; i < this.cells.length; i += 10) {
      const row = this.cells.slice(i, i + 10);
      if (rows.length % 2 === 1) {
        row.reverse();
      }
      rows.push(row);
    }
    return rows;
  }

  hasPlayer(cell: number): boolean {
    return this.players.some(player => player.position === cell);
  }

  getPlayersInCell(cell: number): Player[] {
    return this.players.filter(player => player.position === cell);
  }

  isSnake(cell: number): boolean {
    return this.snakesAndLadders.some(item => item.start === cell && item.type === 'snake');
  }

  isLadder(cell: number): boolean {
    return this.snakesAndLadders.some(item => item.start === cell && item.type === 'ladder');
  }

  getDestination(cell: number): string {
    const snakeOrLadder = this.snakesAndLadders.find(item => item.start === cell);
    return snakeOrLadder ? `${cell} -> ${snakeOrLadder.end}` : cell.toString();
  }
}
