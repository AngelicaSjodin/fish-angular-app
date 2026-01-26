import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, 
  provideAppInitializer,inject, 
  signal} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Service } from '../../services/service';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Timer{
  //service delar variabler mellan komponenter
  

  timeLeft = signal(3);
  private intervalId: number | null = null;

  constructor(public services: Service) {}

  
  startTimer() {
    this.timeLeft.set(3);
    
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      this.timeLeft.update(value => value - 1);

      if (this.timeLeft() <= 0) {
        this.onFinish();
        this.startTimer();
      }
    }, 1000);
  }

  ngOnInit(){
    this.startTimer();
    //if (this.startTimer === null ) {
      //restartfunc();
    //}
  }

  onFinish() {
    this.services.addRoll();
    console.log('Timer finished. Roll added.');
  }

  //ngOnDestroy(): void {
    //if (this.intervalId !== null) {
      //clearInterval(this.intervalId);
    //}
  //}

}

