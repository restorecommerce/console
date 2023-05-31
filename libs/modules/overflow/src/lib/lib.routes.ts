import { Route } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { OverflowTemplateComponent } from './template/overflow-template.component';

export const modulesOverflowRoutes: Route[] = [
  {
    path: '',
    component: OverflowTemplateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IndexComponent,
      },
    ],
  },
];
