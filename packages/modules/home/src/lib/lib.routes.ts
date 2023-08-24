import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { HomeTemplateComponent } from './components//template/home-template.component';
import { HomeComponent } from './components/home/home.component';

export const modulesHomeRoutes: Route[] = [
  {
    path: ROUTER.pages.main.children.home.path,
    component: HomeTemplateComponent,
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
