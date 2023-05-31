import { Route } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LayoutTemplateComponent } from './template/layout-template.component';

export const modulesLayoutRoutes: Route[] = [
  {
    path: '',
    component: LayoutTemplateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IndexComponent,
      },
    ],
  },
];
