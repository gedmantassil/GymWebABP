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
        requiredPolicy: 'Gymzii.Exercises'
      },
      {
        path: '/exercises',
        name: '::Menu:Exercises',
        parentName: '::Menu:Workouts',
        layout: eLayoutType.application,
        requiredPolicy: 'Gymzii.Exercises',
      },
      {
        path: '/findExercises',
        name: '::Menu:FindExercises',
        parentName: '::Menu:Workouts',
        layout: eLayoutType.application,
      },
      {
        path: '/contacts',
        name: '::Menu:Contacts',
        iconClass: 'fas fa-address-book',
        order: 4,
        layout: eLayoutType.application,
      },
      {
        path: '/caliasthenics',
        name: '::Menu:Caliasthenics',
        iconClass: 'fas fa-person-running',
        order: 3,
        layout: eLayoutType.application,
      },
      {
        path: '/caliasthenics',
        name: '::Menu:GoalsTracking',
        parentName: '::Menu:Caliasthenics',
        layout: eLayoutType.application,
      },
    ]);
  };
}
