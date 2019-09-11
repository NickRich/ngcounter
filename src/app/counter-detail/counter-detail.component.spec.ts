import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailComponent } from './counter-detail.component';

describe('CounterDetailComponent', () => {
  let component: CounterDetailComponent;
  let fixture: ComponentFixture<CounterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with count 0', () => {
    let element = fixture.elementRef.nativeElement;
    expect(component.count).toBe(0);
  })

  it('should add 1', () => {
    component.add();
    expect(component.count).toBe(1);
  })

  it ('should subtract 1', () => {
    component.add();
    component.subtract();
    expect(component.count).toBe(0);
  })

  it('should not go under 0', () => {
    component.subtract();
    expect(component.count).toBe(0);
  })
});
