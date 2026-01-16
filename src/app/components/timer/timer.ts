import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.scss',
})
export class Timer implements OnDestroy{
  intervalId: number | null = null;
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  rollsCounter = 0;

  timeLeft = 9;
  finished = false;

  startTimer() {
    this.finished = false;
    this.timeLeft = 9;

    if (this.intervalId !== null  ) {
      clearInterval(this.intervalId);
    }

    this.intervalId = window.setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.onFinish();
      }
    }, 1000);
  }
  onFinish() {
    this.rollsCounter++;
    console.log('Timer finished! Rolls available: ' + this.rollsCounter);
  }

}
