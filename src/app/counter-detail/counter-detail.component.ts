import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
   count: number;
  @Output() valueChanged = new EventEmitter();
  constructor() { 
    this.count = 0;
  }

  add() {
    this.count++;
    this.valueChanged.emit(1);
    
  }
  subtract() {
    if (this.count > 0) {
      this.count--;
      this.valueChanged.emit(-1);
    }
    
  }

  checkDisabled() {
    return this.count == 0;
  }
  ngOnInit() {
  }

}
