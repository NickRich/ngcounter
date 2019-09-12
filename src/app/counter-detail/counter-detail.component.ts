import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
  count: number;
  constructor() { 
    this.count = 0;
  }

  add() {
    this.count++;
  }
  subtract() {
    if (this.count > 0) {
      this.count--;
    }
    
  }
  getCount() {
    console.log(this.count)
    return this.count;
  }

  checkDisabled() {
    return this.count == 0;
  }
  ngOnInit() {
  }

}
