import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  RSUiModule,
  LayoutConfig,
  LAYOUT_CONFIG,
  LAYOUT_USER$,
  LAYOUT_ORGS$,
  LAYOUT_SELECTED_ORG_ID$,
  LAYOUT_SET_SELECTED_ORG,
  LAYOUT_ACCOUNT_ACTION_HANDLER,
  AccountAction,
  RsHeaderUser,
  RsHeaderOrganization,
  ModulesRsUiBaseModule,
} from '@console/rs-ui';
import { BehaviorSubject } from 'rxjs';

import { App } from './app';
import {
  appRoutes,
  DemoDashboardPageComponent,
  DemoSettingsPageComponent,
} from './app.routes';

export const NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'mdi mdi-home',
    route: '/dashboard',
  },
  {
    id: 'catalog',
    label: 'Catalog',
    // icon: 'mdi mdi-store',
    expanded: true,
    children: [
      {
        id: 'products',
        label: 'Products',
        icon: 'mdi mdi-package-variant-closed', // or 'mdi-cube-outline'
        route: '/app/catalog/products',
      },
      {
        id: 'categories',
        label: 'Categories',
        icon: 'mdi mdi-shape-outline', // or 'mdi-view-list'
        route: '/catalog/categories',
      },
      {
        id: 'attributes',
        label: 'Attributes',
        icon: 'mdi mdi-tune-variant', // or 'mdi-tag-text-outline'
        route: '/catalog/attributes',
      },
    ],
  },
  {
    id: 'orders',
    label: 'Orders',
    icon: 'mdi mdi-receipt',
    children: [
      { id: 'all-orders', label: 'All Orders', route: '/orders' },
      { id: 'returns', label: 'Returns', route: '/orders/returns' },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'mdi mdi-cog',
    children: [
      { id: 'general', label: 'General', route: '/settings/general' },
      { id: 'users', label: 'Users', route: '/settings/users' },
    ],
  },
];

const demoLayoutConfig: LayoutConfig = {
  appName: 'RS UI Demo',
  logoUrl: 'favicon.ico',
  navItems: NAV_ITEMS,
};

const user$ = new BehaviorSubject<RsHeaderUser | null>({
  id: 'u1',
  fullName: 'Demo User',
  email: 'demo@example.com',
});

const orgs$ = new BehaviorSubject<RsHeaderOrganization[]>([
  { id: 'org-1', name: 'Demo Org One' },
  { id: 'org-2', name: 'Demo Org Two' },
]);

const selectedOrgId$ = new BehaviorSubject<string | null>('org-1');

@NgModule({
  declarations: [App, DemoDashboardPageComponent, DemoSettingsPageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RSUiModule,
    ModulesRsUiBaseModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LAYOUT_CONFIG, useValue: demoLayoutConfig },
    { provide: LAYOUT_USER$, useValue: user$.asObservable() },
    { provide: LAYOUT_ORGS$, useValue: orgs$.asObservable() },
    {
      provide: LAYOUT_SELECTED_ORG_ID$,
      useValue: selectedOrgId$.asObservable(),
    },

    {
      provide: LAYOUT_SET_SELECTED_ORG,
      useValue: (id: string) => selectedOrgId$.next(id),
    },
    {
      provide: LAYOUT_ACCOUNT_ACTION_HANDLER,
      useValue: (action: AccountAction) => {
        console.log('[rs-ui-demo] account action', action);
      },
    },
  ],

  bootstrap: [App],
})
export class AppModule {}
