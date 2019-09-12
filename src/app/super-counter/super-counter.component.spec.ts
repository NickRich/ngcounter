import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterListComponent } from '../counter-list/counter-list.component';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
import { SuperDuperCounterComponent } from '../super-duper-counter/super-duper-counter.component';
import { ColossalCounterComponent } from '../colossal-counter/colossal-counter.component';


describe('SuperCounterComponent', () => {
  let component: SuperCounterComponent;
  let fixture: ComponentFixture<SuperCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterListComponent,
        CounterDetailComponent,
        SuperCounterComponent,
        SuperDuperCounterComponent,
        ColossalCounterComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 3', () => {
    component.actualCount = 0;
    component.add();
    expect(component.actualCount).toBe(3);
  })
  it('should subtract 3', () => {
    component.actualCount = 6;
    component.subtract();
    expect(component.actualCount).toBe(3);
  })
  it('should not go below 0', () => {
    component.actualCount = 2;
    component.subtract();
    expect(component.actualCount).toBe(0);
  })
  it('should set disabled flag', () => {
    component.actualCount = 0;
    expect(component.checkDisabled()).toBe(true);
  })
});
