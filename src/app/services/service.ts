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
  cardsWithChances: { card: Card; chance: number }[] = [
    { card: { id: 1, name: 'cat', image: 'cat.jpeg' }, chance: 95 },
    { card: { id: 2, name: 'also-a-cat', image: 'also-a-cat.jpeg' }, chance: 5 },
  ];
  drawCardWithChance = signal<Card | null>(null);

  drawRandomCardWithChance() {
    const totalChance = this.cardsWithChances.reduce(
      (sum, item) => sum + item.chance,
      0
    );
    const randomNum = Math.random() * totalChance;
    let cumulativeChance = 0;

    for (const item of this.cardsWithChances) {
      cumulativeChance += item.chance;
      if (randomNum <= cumulativeChance) {
        this.drawCardWithChance.set(item.card);
        return;
      }
    }
    this.drawCardWithChance.set(null);
  }}