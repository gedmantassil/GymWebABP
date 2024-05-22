import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardioComponent } from './cardio.component';
import { authGuard, permissionGuard } from '@abp/ng.core';
const routes: Routes = [{ path: '', component: CardioComponent, canActivate: [authGuard, permissionGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardioRoutingModule { }
