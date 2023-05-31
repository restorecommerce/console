import { Route } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { HomeTemplateComponent } from './template/home-template.component';

export const modulesHomeRoutes: Route[] = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IndexComponent,
      },
    ],
  },
];
