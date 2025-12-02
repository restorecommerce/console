import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AccountAction,
  LAYOUT_ACCOUNT_ACTION_HANDLER,
  LAYOUT_CONFIG,
  LAYOUT_ORGS$,
  LAYOUT_SELECTED_ORG_ID$,
  LAYOUT_SET_SELECTED_ORG,
  LAYOUT_USER$,
  ModulesRsUiBaseModule,
  RsHeaderOrganization,
  RsHeaderUser,
  RSUiModule,
} from '@console/rs-ui';
import { BehaviorSubject } from 'rxjs';

import { VCLDateAdapterModule } from '@vcl/ng-vcl';

import { ModulesUiBaseModule, ModulesUiModule } from '@console-modules/ui';

import {
  PrivateTemplateComponent,
  PublicTemplateComponent,
} from './components/template';
import { modulesMainRoutes } from './lib.routes';
import { MAIN_LAYOUT_CONFIG } from './main-layout.config';

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
  declarations: [PrivateTemplateComponent, PublicTemplateComponent],
  imports: [
    ModulesUiBaseModule,
    ModulesUiModule.forRoot(),
    VCLDateAdapterModule.forRoot(),
    RouterModule.forChild(modulesMainRoutes),
    RSUiModule,
    ModulesRsUiBaseModule,
  ],
  providers: [
    { provide: LAYOUT_CONFIG, useValue: MAIN_LAYOUT_CONFIG },
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
})
export class ModulesMainModule {}
