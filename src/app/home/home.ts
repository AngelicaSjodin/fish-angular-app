import { Component } from '@angular/core';
import { Roll } from '../components/roll/roll';
import { timer } from 'rxjs';
import { Timer } from '../components/timer/timer';

@Component({
  selector: 'app-home',
  imports: [Roll, Timer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
