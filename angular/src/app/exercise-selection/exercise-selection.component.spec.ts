import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSelectionComponent } from './exercise-selection.component';

describe('ExerciseSelectionComponent', () => {
  let component: ExerciseSelectionComponent;
  let fixture: ComponentFixture<ExerciseSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
