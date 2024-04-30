import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaliasthenicComponent } from './caliasthenic.component';

const routes: Routes = [{ path: '', component: CaliasthenicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaliasthenicRoutingModule { }
