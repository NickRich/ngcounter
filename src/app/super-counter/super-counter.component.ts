import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() count: number;
  constructor() {
    this.count = 0;
   }
   add() {
    this.count += 3;
  }
  subtract() {
    if (this.count > 0) {
      this.count -= 3;
    }
    
  }

  checkDisabled() {
    return this.count == 0;
  }
  ngOnInit() {
  }

}
