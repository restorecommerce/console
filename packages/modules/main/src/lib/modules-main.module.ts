import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  AccountAction,
  LAYOUT_ACCOUNT_ACTION_HANDLER,
  LAYOUT_CONFIG,
  LAYOUT_ORGS$,
  LAYOUT_SELECTED_ORG_ID$,
  LAYOUT_SET_SELECTED_ORG,
  LAYOUT_USER$,
  ModulesRsUiBaseModule,
  RSUiModule,
} from '@console/rs-ui';

import { ROUTER } from '@console-core/config';
import {
  AccountFacade,
  AuthnFacade,
  OrganizationContextFacade,
} from '@console-core/state';

import { modulesMainRoutes } from './lib.routes';
import { MAIN_LAYOUT_CONFIG } from './main-layout.config';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(modulesMainRoutes),
    RSUiModule,
    ModulesRsUiBaseModule,
  ],
  providers: [
    { provide: LAYOUT_CONFIG, useValue: MAIN_LAYOUT_CONFIG },
    {
      provide: LAYOUT_USER$,
      useFactory: (account: AccountFacade) => account.user$,
      deps: [AccountFacade],
    },
    {
      provide: LAYOUT_ORGS$,
      useFactory: (org: OrganizationContextFacade) => org.all$,
      deps: [OrganizationContextFacade],
    },
    {
      provide: LAYOUT_SELECTED_ORG_ID$,
      useFactory: (org: OrganizationContextFacade) => org.selectedId$,
      deps: [OrganizationContextFacade],
    },

    {
      provide: LAYOUT_SET_SELECTED_ORG,
      useFactory: (org: OrganizationContextFacade) => (id: string) =>
        org.setSelectedOrganizationId(id),
      deps: [OrganizationContextFacade],
    },
    {
      provide: LAYOUT_ACCOUNT_ACTION_HANDLER,
      useFactory:
        (router: Router, auth: AuthnFacade) => (action: AccountAction) => {
          switch (action) {
            case 'profile':
              router.navigate([
                ROUTER.pages.main.children.account.children.profile.link,
              ]);
              break;
            case 'preferences':
              router.navigate([
                ROUTER.pages.main.children.account.children.preferences.link,
              ]);
              break;
            case 'sign-out':
              auth.signOut();
              break;
          }
        },
      deps: [Router, AuthnFacade],
    },
  ],
})
export class ModulesMainModule {}
