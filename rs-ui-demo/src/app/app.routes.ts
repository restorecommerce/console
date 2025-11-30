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

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-product-page',
  template: `<h3>Product page</h3>`,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
})
export class DemoProductsPageComponent {}

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
        path: 'catalog',
        children: [
          {
            path: 'products',
            component: DemoProductsPageComponent,
            data: { breadcrumb: 'Products' },
          },
        ],
        data: { breadcrumb: 'Catalog' },
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
