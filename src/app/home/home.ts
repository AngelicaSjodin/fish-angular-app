import { Component } from '@angular/core';
import { Game } from '../game/game';

@Component({
  selector: 'app-home',
  imports: [Game],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  startGame() {
    window.location.href = '/game';
  }
}
