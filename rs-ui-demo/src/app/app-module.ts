import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {
  RSUiModule,
  LayoutShellComponent,
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
// import { appRoutes } from './app.routes';

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

const routes: Routes = [
  {
    path: '',
    component: LayoutShellComponent, // ⬅ shell from rs-ui
    children: [
      { path: 'dashboard', component: DemoDashboardPageComponent },
      { path: 'settings', component: DemoSettingsPageComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ],
  },
];

const demoLayoutConfig: LayoutConfig = {
  appName: 'RS UI Demo',
  logoUrl: '/assets/logo.svg',
  navItems: [
    {
      id: 'dashboard',
      label: 'Dashboard',
      route: '/dashboard',
      icon: 'mdi mdi-view-dashboard-outline',
    },
    {
      id: 'settings',
      label: 'Settings',
      route: '/settings',
      icon: 'mdi mdi-cog-outline',
    },
  ],
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
    RouterModule.forRoot(routes),
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
