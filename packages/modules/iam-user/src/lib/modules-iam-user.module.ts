import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { modulesIamUserRoutes } from './iam-user.routes';
import {
  userListFeatureKey,
  userListReducer,
  loadUserListEffect,
} from './store';

@NgModule({
  imports: [
    RouterModule.forChild(modulesIamUserRoutes),
    StoreModule.forFeature(userListFeatureKey, userListReducer),
    // StoreModule.forFeature(userViewFeatureKey, userViewReducer),
    EffectsModule.forFeature({
      loadUserListEffect,
      // loadUserViewEffect,
    }),
  ],
})
export class ModulesIamUserModule {}
