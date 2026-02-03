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
    }else {
      alert('No rolls left');
      console.log('No rolls left');
    }
  }

  buttonSound(){
    let audio = new Audio();
    audio.src = "splash.mp3";
    audio.load();
    audio.play();
  }

  
}
