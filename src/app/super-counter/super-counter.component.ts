import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() count: number;
  actualCount: number;
  constructor() {
  }
   add() {
    this.actualCount += 3;
  }
  subtract() {
    if (this.actualCount > 0) {
      this.actualCount -= 3;
    }
    
  }

  checkDisabled() {
    return this.actualCount == 0;
  }
  ngOnInit() {
    this.actualCount = this.count;
  }

}
