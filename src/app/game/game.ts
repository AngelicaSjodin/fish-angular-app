import { Component } from '@angular/core';
import { Roll } from '../components/roll/roll';
import { Timer } from '../components/timer/timer';
import { Cards } from "../components/cards/cards";

@Component({
  selector: 'app-game',
  imports: [Roll, Timer, Cards],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {

}
