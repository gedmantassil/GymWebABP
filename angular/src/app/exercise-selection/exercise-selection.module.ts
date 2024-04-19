import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseSelectionRoutingModule } from './exercise-selection-routing.module';
import { ExerciseSelectionComponent } from './exercise-selection.component';


@NgModule({
  declarations: [
    ExerciseSelectionComponent
  ],
  imports: [
    CommonModule,
    ExerciseSelectionRoutingModule
  ]
})
export class ExerciseSelectionModule { }
