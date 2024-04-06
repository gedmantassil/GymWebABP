import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { ExerciseComponent } from './exercise.component';


@NgModule({
  declarations: [
    ExerciseComponent
  ],
  imports: [
    SharedModule,
    ExerciseRoutingModule
  ]
})
export class ExerciseModule { }
