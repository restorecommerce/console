import { Route } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { ProfileTemplateComponent } from './components/profile-template.component';
import { SettingsComponent } from './components/settings/settings.component';

export const modulesProfileRoutes: Route[] = [
  {
    path: '',
    component: ProfileTemplateComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];
