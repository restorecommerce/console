import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RcNotifierService } from '@console/rc-ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { VCLNotifierModule } from '@vcl/ng-vcl';

import { modulesIamUserRoutes } from './iam-user.routes';
import {
  userListFeatureKey,
  userListReducer,
  loadUserListEffect,
  userViewFeatureKey,
  userViewReducer,
  loadIAMUserViewEffect,
  loadOrganizationListEffect,
  organizationListReducer,
  organizationListFeatureKey,
  roleListFeatureKey,
  roleListReducer,
  loadRoleListEffect,
  iamUserEditReducer,
  iamUserEditFeatureKey,
  loadEditUserEffect,
  updatedUserEffect,
  navigateAfterUpdateEffect,
  reloadUserListOnMutationEffect,
} from './store';
import {
  iamUserCreateFeatureKey,
  iamUserCreateReducer,
} from './store/user-create';
import {
  loadUserCreationEffect,
  navigateAfterCreateEffect,
} from './store/user-create/user-create.effects';

@NgModule({
  imports: [
    VCLNotifierModule,
    RouterModule.forChild(modulesIamUserRoutes),
    StoreModule.forFeature(userListFeatureKey, userListReducer),
    StoreModule.forFeature(userViewFeatureKey, userViewReducer),
    StoreModule.forFeature(iamUserCreateFeatureKey, iamUserCreateReducer),
    StoreModule.forFeature(iamUserEditFeatureKey, iamUserEditReducer),
    StoreModule.forFeature(organizationListFeatureKey, organizationListReducer),
    StoreModule.forFeature(roleListFeatureKey, roleListReducer),

    EffectsModule.forFeature({
      loadUserListEffect,
      reloadUserListOnMutationEffect,
      loadIAMUserViewEffect,
      loadUserCreationEffect,
      navigateAfterCreateEffect,
      loadOrganizationListEffect,
      loadRoleListEffect,
      loadEditUserEffect,
      updatedUserEffect,
      navigateAfterUpdateEffect,
    }),
  ],
  providers: [RcNotifierService],
})
export class ModulesIamUserModule {}
