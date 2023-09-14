import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { AccountTemplateComponent } from './components/template/account-template.component';

export const modulesProfileRoutes: Route[] = [
  {
    path: '',
    component: AccountTemplateComponent,
    title: ROUTER.pages.main.children.account.title,
    children: [
      {
        path: ROUTER.pages.main.children.account.children.index.path,
        loadChildren: () =>
          import('./components/account/account.module').then(
            (m) => m.AccountModule
          ),
        title: ROUTER.pages.main.children.account.children.index.title,
      },
      {
        path: ROUTER.pages.main.children.account.children.profile.path,
        loadChildren: () =>
          import('./components/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
        title: ROUTER.pages.main.children.account.children.profile.title,
      },
      {
        path: ROUTER.pages.main.children.account.children.preferences.path,
        loadChildren: () =>
          import('./components/preferences/preferences.module').then(
            (m) => m.PreferencesModule
          ),
        title: ROUTER.pages.main.children.account.children.preferences.title,
      },
    ],
  },
];
