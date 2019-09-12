import { Component, OnInit } from '@angular/core';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
import { SuperDuperCounterComponent } from '../super-duper-counter/super-duper-counter.component';
import { ColossalCounterComponent } from '../colossal-counter/colossal-counter.component';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})

export class CounterListComponent implements OnInit {
  counters: CounterDetailComponent[]
  superCounters: SuperCounterComponent[]
  superDuperCounters: SuperDuperCounterComponent[];
  colossalCounters: ColossalCounterComponent[];
  constructor() {
    this.counters = [];
    this.superCounters = [];
    this.superDuperCounters = [];
    this.colossalCounters = [];
  }
  createCounter() {
    if (this.counters.length === 6) {
      let sum: number = 0;
      this.counters.forEach(counter => {
        sum += counter.getCount();
      })
      this.createSuperCounter(sum);
      this.counters = [];
    } else {
      this.counters.push(new CounterDetailComponent())
    }
  }
  createSuperCounter(sum: number) {
    let sc = new SuperCounterComponent();
    sc.count = sum;
    this.superCounters.push(sc);
    if (this.superCounters.length === 4) {
      this.createSuperDuperCounter();
      this.superCounters = [];
    }
  }
  createSuperDuperCounter() {
    this.superDuperCounters.push(new SuperDuperCounterComponent());
    if (this.superDuperCounters.length === 4) {
      this.createColossalCounter();
      this.superDuperCounters = [];
    }
  }
  createColossalCounter() {
    this.colossalCounters.push(new ColossalCounterComponent());
  }
  ngOnInit() {
  }

}
