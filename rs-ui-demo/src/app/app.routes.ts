import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { LayoutShellComponent } from '@console/rs-ui';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-dashboard-page',
  template: `<h1>Demo Dashboard</h1>`,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
})
export class DemoDashboardPageComponent {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-settings-page',
  template: `<h1>Demo Settings</h1>`,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
})
export class DemoSettingsPageComponent {}

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('@console/rs-ui').then((m) => m.RsAuthModule),
  },
  {
    path: 'app',
    component: LayoutShellComponent, // ⬅ shell from rs-ui
    children: [
      {
        path: 'dashboard',
        component: DemoDashboardPageComponent,
        data: { breadcrumb: 'Dashboard' },
      },
      {
        path: 'settings',
        component: DemoSettingsPageComponent,
        data: { breadcrumb: 'Settings' },
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ],
  },
];
