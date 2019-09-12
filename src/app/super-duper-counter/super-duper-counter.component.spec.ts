import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDuperCounterComponent } from './super-duper-counter.component';

describe('SuperDuperCounterComponent', () => {
  let component: SuperDuperCounterComponent;
  let fixture: ComponentFixture<SuperDuperCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperDuperCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDuperCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should start at 0', () => {
    expect(component.count).toBe(0);
  });
  it('should increment by 1', () => {
    component.increment()
    expect(component.count).toBe(1);
  })
});
