import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
  rollsCounter = signal(0);

  addRoll() {
    this.rollsCounter.update(v => v + 1);
  }

  useRoll(): boolean {
    if (this.rollsCounter() > 0) {
      this.rollsCounter.update(v => v - 1);
      return true;
    }
    return false;
  }

}