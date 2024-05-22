import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardioComponent } from './cardio.component';

const routes: Routes = [{ path: '', component: CardioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardioRoutingModule { }
