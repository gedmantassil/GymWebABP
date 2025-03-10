import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  { path: 'exercises', loadChildren: () => import('./exercise/exercise.module').then(m => m.ExerciseModule) },
  { path: 'exercises', loadChildren: () => import('./exercise-selection/exercise-selection.module').then(m => m.ExerciseSelectionModule) },
  { path: 'findExercises', loadChildren: () => import('./exercise-selection/exercise-selection.module').then(m => m.ExerciseSelectionModule) },
  { path: 'contacts', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'caliasthenics', loadChildren: () => import('./caliasthenic/caliasthenic.module').then(m => m.CaliasthenicModule) },
  { path: 'caliasthenics', loadChildren: () => import('./caliasthenic/caliasthenic.module').then(m => m.CaliasthenicModule) },
  { path: 'cardios', loadChildren: () => import('./cardio/cardio.module').then(m => m.CardioModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
