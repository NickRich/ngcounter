import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colossal-counter',
  templateUrl: './colossal-counter.component.html',
  styleUrls: ['./colossal-counter.component.css']
})
export class ColossalCounterComponent implements OnInit {
  count: number;
  constructor() {
    this.count = 0;
   }

  ngOnInit() {
    setInterval(this.increment.bind(this), 1000)
  }

  increment() {
    this.count += 2;
  }

}
