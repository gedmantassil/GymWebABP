import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CaliasthenicRoutingModule } from './caliasthenic-routing.module';
import { CaliasthenicComponent } from './caliasthenic.component';


@NgModule({
  declarations: [
    CaliasthenicComponent
  ],
  imports: [
    SharedModule,
    CaliasthenicRoutingModule
  ]
})
export class CaliasthenicModule { }
