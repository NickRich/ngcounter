import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats-component',
  templateUrl: './stats-component.component.html',
  styleUrls: ['./stats-component.component.css']
})
export class StatsComponentComponent implements OnInit {
  @Input() numCounters: number
  @Input() numSuperCounters: number
  constructor() { }

  ngOnInit() {
  }

}
