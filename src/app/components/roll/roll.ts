import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Service } from '../../services/service';


@Component({
  selector: 'app-roll',
  imports: [],
  templateUrl: './roll.html',
  styleUrl: './roll.scss',
})
export class Roll {
  constructor(private services: Service) {}

  roll() {
    if (this.services.useRoll()) {
      this.services.drawRandomCard();
      this.sound();
    }else {
      alert('No rolls left');
      console.log('No rolls left');
    }
  }

  sound(){
    this.services.buttonSound();
  }

  
}
