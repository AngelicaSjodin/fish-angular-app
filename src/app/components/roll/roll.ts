import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Timer } from '../timer/timer';
import { Service } from '../../services/service';


@Component({
  selector: 'app-roll',
  imports: [Timer],
  templateUrl: './roll.html',
  styleUrl: './roll.scss',
})
export class Roll {
  service: any;
  //plan?
  //tar bort 1 från count i timerComp, slumpar fram ett kort från CardsComp, skicka vidare till inventoryComp
  //vilkor, count kan inte gå under 0

  constructor(private services: Service) {}
  
  roll() {
    if (this.services.useRoll()) {
      this.mixCards();
    }else {
      console.log('No rolls left');
    }
  }
  mixCards() {
    //slumpar fram ett kort
  }
}
