import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterListComponent } from '../counter-list/counter-list.component';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
import { SuperDuperCounterComponent } from '../super-duper-counter/super-duper-counter.component';
import { ColossalCounterComponent } from '../colossal-counter/colossal-counter.component';


describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterListComponent,
        CounterDetailComponent,
        SuperCounterComponent,
        SuperDuperCounterComponent,
        ColossalCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize with no counters', () => {
    expect(component.counters.length).toBe(0);
  })
  it('should add new counter', () => {
    component.createCounter();
    expect(component.counters.length).toBe(1);
  })
  it('should initialize with no super counters', () => {
    expect(component.superCounters.length).toBe(0);
  })
  it('should add new super counter', () => {
    component.createSuperCounter();
    expect(component.superCounters.length).toBe(1);
  })
  it('should delete 6 counters and create new super counter', () => {
    component.createCounter();
    component.createCounter();
    component.createCounter();
    component.createCounter();
    component.createCounter();
    component.createCounter();
    component.createCounter();
    expect(component.counters.length).toBe(0);
    expect(component.superCounters.length).toBe(1);
  })
  it('should initialize with no super duper counters', () => {
    expect(component.superDuperCounters.length).toBe(0);
  })
  it('should add new super duper counter', () => {
    component.createSuperDuperCounter();
    expect(component.superDuperCounters.length).toBe(1);
  })
  it('should delete 3 super counters and create new super duper counter', () => {
    component.createSuperCounter();
    component.createSuperCounter();
    component.createSuperCounter();
    component.createSuperCounter();
    expect(component.superCounters.length).toBe(0);
    expect(component.superDuperCounters.length).toBe(1);
  })
  it('should initialize with no colossal counters', () => {
    expect(component.colossalCounters.length).toBe(0);
  })
  it('should add new colossal duper counter', () => {
    component.createColossalCounter();
    expect(component.colossalCounters.length).toBe(1);
  })
  it('should delete 3 super duper counters and create new colossal counter', () => {
    component.createSuperDuperCounter();
    component.createSuperDuperCounter();
    component.createSuperDuperCounter();
    component.createSuperDuperCounter();
    expect(component.superDuperCounters.length).toBe(0);
    expect(component.colossalCounters.length).toBe(1);
  })
});
