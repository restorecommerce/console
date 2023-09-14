import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { LayoutComponent } from './components/layout/layout.component';
import { LayoutTemplateComponent } from './components/template/layout-template.component';

export const modulesLayoutRoutes: Route[] = [
  {
    path: '',
    component: LayoutTemplateComponent,
    title: ROUTER.pages.main.children.layout.title,
    children: [
      {
        path: ROUTER.pages.main.children.layout.path,
        component: LayoutComponent,
      },
    ],
  },
];
