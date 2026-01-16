import { Component } from '@angular/core';
import { Roll } from '../components/roll/roll';

@Component({
  selector: 'app-home',
  imports: [Roll],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
