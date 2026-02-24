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

    EffectsModule.forFeature({
      loadUserListEffect,
      loadIAMUserViewEffect,
      loadUserCreationEffect,
      navigateOnUserCreateSuccessEffect,
    }),
  ],
})
export class ModulesIamUserModule {}
