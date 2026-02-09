import { Injectable, signal } from '@angular/core';
import { Card } from '../components/cards/card.model';
import { Inventory } from '../components/inventory/inventory';

@Injectable({
  providedIn: 'root',
})
export class Service {
  rollsCounter = signal(0);

  inventory = signal<Card[]>([]);

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
    { id: 1, name: 'lax', image: 'lax.png', rarity:'Common' },
    { id: 2, name: 'talipa', image: 'talipa.png',rarity:'Common' },
    { id: 3, name: 'carp', image: 'carp.png',rarity:'Common' },
    { id: 4, name: 'mackerel', image: 'mackerel.png',rarity:'Uncommon' },
    { id: 5, name: 'cod', image: 'cod.png',rarity:'Uncommon' },
    { id: 6, name: 'burbot', image: 'burbot.png',rarity:'Rare' },
    { id: 7, name: 'bass', image: 'bass.png',rarity:'Common' },
  ];

  drawCard = signal<Card | null>(null);

  //droprateCommon = 0.55;
  //droprateUncommon = 0.25;
  //droprateRare = 0.12;
  //droprateEpic = 0.05;
  //droprateLegendary = 0.02;
  //droprateFossile = 0.01;

  rollRarity(): Card['rarity'] | null {
    const roll = Math.random();

    if (roll < 0.55) return 'Common';
    if (roll < 0.88) return 'Uncommon';
    if (roll < 0.92) return 'Rare';
    if (roll < 0.97) return 'Epic';
    if (roll < 0.99) return 'Legendary';
    if (roll < 0.99) return 'Fossile'

    return null;
  }
    
  

  drawRandomCard() {
    
    const rarity = this.rollRarity();
    if (!rarity) return;

    const chosenCards = this.cards.filter(c => c.rarity === rarity);
    if (chosenCards.length === 0){
      console.log('no rarity cards');
      return;
    }
    const randomIndex = Math.floor(Math.random() * chosenCards.length);
    const card = chosenCards[randomIndex];

    this.drawCard.set(card);
    this.inventory.update(inv => [...inv, card]);
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