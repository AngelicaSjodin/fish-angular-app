import { Component } from '@angular/core';
import { Service } from '../../services/service';


@Component({
  selector: 'app-cards',
  imports: [],
  standalone: true,
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {
  constructor(public services: Service) { }

  
}