import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { OverflowComponent } from './components/overflow/overflow.component';
import { OverflowTemplateComponent } from './components/template/overflow-template.component';

export const modulesOverflowRoutes: Route[] = [
  {
    path: '',
    component: OverflowTemplateComponent,
    title: ROUTER.pages.main.children.overflow.title,
    children: [
      {
        path: ROUTER.pages.main.children.overflow.path,
        component: OverflowComponent,
      },
    ],
  },
];
