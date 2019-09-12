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
});
