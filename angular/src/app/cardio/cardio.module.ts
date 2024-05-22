import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CardioRoutingModule } from './cardio-routing.module';
import { CardioComponent } from './cardio.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CardioComponent],
  imports: [
    CardioRoutingModule,
    SharedModule,
    NgbDatepickerModule,
  ]
})
export class CardioModule { }