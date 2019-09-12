import { Component, OnInit } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-super-duper-counter',
  templateUrl: './super-duper-counter.component.html',
  styleUrls: ['./super-duper-counter.component.css']
})
export class SuperDuperCounterComponent implements OnInit {
  count: number;
  isRunning: boolean;
  constructor() { 
    this.count = 0;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    setInterval(this.increment.bind(this), 1000);
  }

  checkRunning() {
    return this.isRunning;
  }
  increment() {
    this.count++;
  }
  ngOnInit() {
  }

}
