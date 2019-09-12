import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColossalCounterComponent } from './colossal-counter.component';

describe('ColossalCounterComponent', () => {
  let component: ColossalCounterComponent;
  let fixture: ComponentFixture<ColossalCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColossalCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColossalCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should start at 0', () => {
    expect(component.count).toBe(0);
  });
  it('should increment by 2', () => {
    component.increment()
    expect(component.count).toBe(2);
  })
});
