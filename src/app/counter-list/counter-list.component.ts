import { Component, OnInit } from '@angular/core';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})

export class CounterListComponent implements OnInit {
  counters: CounterDetailComponent[]
  superCounters: SuperCounterComponent[]
  constructor() {
    this.counters = [];
    this.superCounters = [];
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
  }
  ngOnInit() {
  }

}
