import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { ExerciseComponent } from './exercise.component';


@NgModule({
  declarations: [
    ExerciseComponent
  ],
  imports: [
    SharedModule,
    ExerciseRoutingModule,
    ToastrModule
  ]
})
export class ExerciseModule { }
