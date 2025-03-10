import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseSelectionComponent } from './exercise-selection.component';

const routes: Routes = [{ path: '', component: ExerciseSelectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseSelectionRoutingModule { }
