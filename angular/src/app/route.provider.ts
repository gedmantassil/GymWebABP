import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/workouts',
        name: '::Menu:Workouts',
        iconClass: 'fas fa-dumbbell',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/exercises',
        name: '::Menu:Exercises',
        parentName: '::Menu:Workouts',
        layout: eLayoutType.application,
      },
      {
        path: '/findExercises',
        name: '::Menu:FindExercises',
        parentName: '::Menu:Workouts',
        layout: eLayoutType.application,
      },
    ]);
  };
}
