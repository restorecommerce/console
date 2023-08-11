import { Route } from '@angular/router';

import { ROUTER } from '@console-core/config';

import { AccountTemplateComponent } from './components/template/account-template.component';

export const modulesProfileRoutes: Route[] = [
  {
    path: '',
    component: AccountTemplateComponent,
    children: [
      {
        path: ROUTER.pages.main.children.account.children.index.path,
        loadChildren: () =>
          import('./components/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: ROUTER.pages.main.children.account.children.profile.path,
        loadChildren: () =>
          import('./components/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: ROUTER.pages.main.children.account.children.preferences.path,
        loadChildren: () =>
          import('./components/preferences/preferences.module').then(
            (m) => m.PreferencesModule
          ),
      },
    ],
  },
];
