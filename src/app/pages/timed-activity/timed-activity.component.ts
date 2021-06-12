import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timed-activity',
  templateUrl: './timed-activity.component.html',
  styleUrls: ['./timed-activity.component.css']
})
export class TimedActivityComponent implements OnInit {
  resumedTime : Date | undefined
  startTime : Date | undefined
  endTime  : Date | undefined
  resetTime : Date | undefined
  
  started : boolean = false
  running : boolean = false
  prevTimeRunning = 0
  timeRunning  = 0 

  constructor() { }

  ngOnInit(): void {
    setInterval( ()=> {
      this.calcRunningTime()
    }, 1000)

  }

  calcRunningTime() {
    if (this.started == true)  {
      let time : Date

      if (this.resumedTime) {
        time = this.resumedTime
      } else if (this.startTime) {
        time = this.startTime
      } else {
        return
      }

      const current = new Date()
      if(this.running == true){
      const milliseconds = time.getTime() - current.getTime()
      const min = Math.floor(milliseconds / 1000 )
      this.timeRunning = min + this.prevTimeRunning
      }
    }
  }
  

  startTimer() {
    this.started = true
    this.running = true
    this.startTime = new Date()

    // Save this to the database
  }

  stopTimer() {
    this.started = false
    this.running = false
    this.resetTime = new Date()
    this.backToList()
  }

  pauseTimer() {
    this.running = false
    this.prevTimeRunning = this.timeRunning

    
  }

    continueTimer() {
      this.running = true
      this.resumedTime = new Date()
    }


  backToList() {
    const current = new Date()
    if(this.resetTime == undefined){
      return
    }
    if(this.running){
      this.continueTimer()
    } else if (current.getTime()-this.resetTime.getTime() > 5000 ){
      
    }
  }

}
