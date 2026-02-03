import { Injectable, signal } from '@angular/core';
import { Card } from '../components/cards/card.model';

@Injectable({
  providedIn: 'root',
})
export class Service {
  rollsCounter = signal(0);

  //till timer comp, ökar 
  addRoll() {
    this.rollsCounter.update(v => v + 1);
  }

  //till roll comp, minskar + korten + randomizer
  useRoll(): boolean {
    if (this.rollsCounter() > 0) {
      this.rollsCounter.update(v => v - 1);
      return true;
    }
    return false;
  }

  cards: Card[] = [
    { id: 1, name: 'fish', image: 'lax.png' },
    { id: 2, name: 'fish', image: 'talipa.png' },
    { id: 3, name: 'fish', image: 'carp.png' },
    { id: 4, name: 'fish', image: 'mackerel.png' },
    { id: 5, name: 'fish', image: 'cod.png' },
    { id: 6, name: 'fish', image: 'burbot.png' },
    { id: 7, name: 'fish', image: 'bass.png' },
  ];

  drawCard = signal<Card | null>(null);

  drawRandomCard() {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    this.drawCard.set(this.cards[randomIndex]);
  }

  //cardsWithDifferentRandomChance comp -------------------

  //sounds, i roll och timer?
  buttonSound(){
    let audio = new Audio();
    audio.src = "rod-throw.mp3";
    audio.load();
    audio.play();
  }

  backgroundSound(){
    let audio = new Audio();
    audio.src = "seagulls.mp3";
    
    audio.load();
    audio.loop = true;
    audio.play();
    
  }



}