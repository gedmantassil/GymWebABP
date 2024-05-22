import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CardioRoutingModule } from './cardio-routing.module';
import { CardioComponent } from './cardio.component';


@NgModule({
  declarations: [
    CardioComponent
  ],
  imports: [
    SharedModule,
    CardioRoutingModule
  ]
})
export class CardioModule { }
