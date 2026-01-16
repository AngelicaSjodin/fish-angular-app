import { ChangeDetectionStrategy, Component, NgZone, OnDestroy } from '@angular/core';

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

  timeLeft = 9;
  finished = false;

  //constructor(private ngZone: NgZone) { }
  constructor(private cf: ChangeDetectionStrategy) { }

  startTimer() {
    this.finished = false;
    this.timeLeft = 9;

    if (this.intervalId !== null  ) {
      clearInterval(this.intervalId);
    }

    //ngzone eller
    //this.ngZone.runOutsideAngular(() => {
    //  this.intervalId = window.setInterval(() => {
    //    this.ngZone.run(() => {
    //      this.timeLeft--;
    //      if (this.timeLeft <= 0) {
    //        this.onFinish();
    //      }
    //      });
    //    }, 1000);
    //    });

    this.intervalId = window.setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.onFinish();
      }
    }, 1000);
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
