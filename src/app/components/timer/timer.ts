import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, 
  provideAppInitializer,inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Timer implements OnDestroy{
  intervalId: number | null = null;
  
  rollsCounter = 0;

  timeLeft = 3;
  finished = false;

  constructor(private cdr: ChangeDetectorRef) {}

  
  startTimer() {
    this.finished = false;
    this.timeLeft = 3;
    
    if (this.intervalId !== null  ) {
      clearInterval(this.intervalId);
    }

    this.intervalId = window.setInterval(() => {
      this.timeLeft--;
      this.cdr.markForCheck();
      if (this.timeLeft <= 0) {
        this.onFinish();
      }
    }, 1000);
  }

  ngOnInit(){
    this.startTimer();
      console.log("Timer restarted");
    if (this.startTimer === null ) {
      //restartfunc();
    
    }
  }

  restart(){
    this.startTimer();
      console.log("Timer restarted");
  }

  onFinish() {
    this.rollsCounter++;
    console.log('rolls: ' + this.rollsCounter);
    if(this.intervalId !== null){
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }

}

