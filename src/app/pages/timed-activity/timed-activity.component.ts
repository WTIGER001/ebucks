import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timed-activity',
  templateUrl: './timed-activity.component.html',
  styleUrls: ['./timed-activity.component.css']
})
export class TimedActivityComponent implements OnInit {
  startTime : Date | undefined
  endTime  : Date | undefined
  
  started : boolean = false
  running : boolean = false
  timeRunning  = 0 

  constructor() { }

  ngOnInit(): void {
    setInterval( ()=> {
      this.calcRunningTime()
    }, 10000)

  }

  calcRunningTime() {
      if (this.startTime == undefined) {
        return
      }

      const current = new Date()
      const milliseconds = current.getTime() - this.startTime.getTime()
      const min = Math.ceil(milliseconds / 1000 / 60)
      this.timeRunning = min
  }

  startTimer() {
    this.started = true
    this.running = true
    this.startTime = new Date()

    // Save this to the database
  }


}
