import { Component } from '@angular/core';
import { Roll } from '../components/roll/roll';
import { Timer } from '../components/timer/timer';

@Component({
  selector: 'app-game',
  imports: [Roll, Timer],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {

}
