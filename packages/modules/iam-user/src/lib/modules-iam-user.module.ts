import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
} from './store';
import {
  iamUserCreateFeatureKey,
  iamUserCreateReducer,
} from './store/user-create';
import {
  loadUserCreationEffect,
  navigateOnUserCreateSuccessEffect,
} from './store/user-create/user-create.effects';

@NgModule({
  imports: [
    RouterModule.forChild(modulesIamUserRoutes),
    StoreModule.forFeature(userListFeatureKey, userListReducer),
    StoreModule.forFeature(userViewFeatureKey, userViewReducer),
    StoreModule.forFeature(iamUserCreateFeatureKey, iamUserCreateReducer),
    StoreModule.forFeature(organizationListFeatureKey, organizationListReducer),
    StoreModule.forFeature(roleListFeatureKey, roleListReducer),

    EffectsModule.forFeature({
      loadUserListEffect,
      loadIAMUserViewEffect,
      loadUserCreationEffect,
      loadOrganizationListEffect,
      loadRoleListEffect,
      navigateOnUserCreateSuccessEffect,
    }),
  ],
})
export class ModulesIamUserModule {}
