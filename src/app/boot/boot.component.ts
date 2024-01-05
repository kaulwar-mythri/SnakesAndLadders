import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styles: [
    '.boot-container { text-align: center; padding: 50px; }',
    'h2 { font-size: 24px; margin-bottom: 20px; }',
    '.button-container { display: flex; justify-content: center; }',
    '.player-button { margin: 10px; padding: 10px 20px; font-size: 16px; background-color: #4caf50; color: white; border: none; cursor: pointer; border-radius: 5px; }',
    '.player-button:hover { background-color: #45a049; }'
  ]
})
export class BootComponent {
  constructor(private router: Router) {}

  selectPlayers(numberOfPlayers: number) {
    this.router.navigate(['/app', { players: numberOfPlayers }]);
  }
}
