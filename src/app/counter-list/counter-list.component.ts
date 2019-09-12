import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import { CounterDetailComponent } from "../counter-detail/counter-detail.component";
import { SuperCounterComponent } from "../super-counter/super-counter.component";
import { SuperDuperCounterComponent } from "../super-duper-counter/super-duper-counter.component";
import { ColossalCounterComponent } from "../colossal-counter/colossal-counter.component";
import { StatsComponentComponent } from '../stats-component/stats-component.component';
@Component({
  selector: "app-counter-list",
  templateUrl: "./counter-list.component.html",
  styleUrls: ["./counter-list.component.css"]
})
export class CounterListComponent implements OnInit {
  counters: CounterDetailComponent[];
  superCounters: SuperCounterComponent[];
  superDuperCounters: SuperDuperCounterComponent[];
  colossalCounters: ColossalCounterComponent[];
  
  sum: number;
  constructor() {
    this.counters = [];
    this.superCounters = [];
    this.superDuperCounters = [];
    this.colossalCounters = [];
    this.sum = 0;
  }
  createCounter() {
    if (this.counters.length === 6) {
      this.createSuperCounter();
      this.counters = [];
    } else {
      if(this.counters.length === 0) {
        this.sum = 0;
      }
      this.counters.push(new CounterDetailComponent());
    }
  }
  createSuperCounter() {
    this.playAudio();
    if (this.superCounters.length === 3) {
      this.createSuperDuperCounter();
      this.superCounters = [];
    } else {
      this.superCounters.push(new SuperCounterComponent());
    }
  }
  createSuperDuperCounter() {
    if (this.superDuperCounters.length === 3) {
      this.createColossalCounter();
      this.superDuperCounters = [];
    } else {
      this.superDuperCounters.push(new SuperDuperCounterComponent());
    }
  }
  createColossalCounter() {
    this.colossalCounters.push(new ColossalCounterComponent());
  }
  updateSum(event) {
    this.sum += event;
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "../assets/swvader04.wav";
    audio.load();
    audio.play();
  }

  ngOnInit() {
  }
}
