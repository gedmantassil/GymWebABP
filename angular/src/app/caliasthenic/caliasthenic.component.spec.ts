import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliasthenicComponent } from './caliasthenic.component';

describe('CaliasthenicComponent', () => {
  let component: CaliasthenicComponent;
  let fixture: ComponentFixture<CaliasthenicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaliasthenicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaliasthenicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
