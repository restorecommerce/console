import { Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HomeTemplateComponent } from './components/home-template.component';

export const modulesHomeRoutes: Route[] = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
