import { Injectable, signal } from '@angular/core';
import { Card } from '../components/cards/card.model';

@Injectable({
  providedIn: 'root',
})
export class Service {
  rollsCounter = signal(0);

  //till timer comp
  addRoll() {
    this.rollsCounter.update(v => v + 1);
  }

  //till roll comp
  useRoll(): boolean {
    if (this.rollsCounter() > 0) {
      this.rollsCounter.update(v => v - 1);
      return true;
    }
    return false;
  }

  //till cards comp
  cards: Card[] = [
    { id: 1, name: 'Ace of Spades', image: 'src/assets/cat.jpeg' },
    { id: 2, name: 'King of Hearts', image: 'src/app/images/cat.jpeg' },
  ];

  drawCard = signal<Card | null>(null);

  drawRandomCard() {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    this.drawCard.set(this.cards[randomIndex]);
  }

}