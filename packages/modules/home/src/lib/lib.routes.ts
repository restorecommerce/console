import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { HomeComponent } from './components/home/home.component';

export const modulesHomeRoutes: Route[] = [
  {
    path: '',
    title: ROUTER.pages.main.children.home.title,
    children: [
      {
        path: ROUTER.pages.main.children.home.path,
        pathMatch: 'full',
        component: HomeComponent,
      },
    ],
  },
];
