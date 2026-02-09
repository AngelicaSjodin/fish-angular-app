import { Component } from '@angular/core';
import { Roll } from '../components/roll/roll';
import { Timer } from '../components/timer/timer';
import { Cards } from "../components/cards/cards";
import { Inventory } from '../components/inventory/inventory';

@Component({
  selector: 'app-game',
  imports: [Roll, Timer, Cards,Inventory],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {

}
