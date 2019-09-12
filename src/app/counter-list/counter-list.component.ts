import { Component, OnInit } from '@angular/core';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
import { SuperDuperCounterComponent } from '../super-duper-counter/super-duper-counter.component';
@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})

export class CounterListComponent implements OnInit {
  counters: CounterDetailComponent[]
  superCounters: SuperCounterComponent[]
  superDuperCounters: SuperDuperCounterComponent[];
  constructor() {
    this.counters = [];
    this.superCounters = [];
    this.superDuperCounters = [];
  }
  createCounter() {
    this.counters.push(new CounterDetailComponent())
    if (this.counters.length === 6) {
      this.createSuperCounter();
      this.counters = [];
    }
  }
  createSuperCounter() {
    this.superCounters.push(new SuperCounterComponent());
    if (this.superCounters.length === 3) {
      this.createSuperDuperCounter();
      this.superCounters = [];
    }
  }
  createSuperDuperCounter() {
    this.superDuperCounters.push(new SuperDuperCounterComponent());
  }
  ngOnInit() {
  }

}
