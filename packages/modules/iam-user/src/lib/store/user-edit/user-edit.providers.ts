import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadUserEffect, updatedUserEffect } from './user-edit.effects';
import {
  iamUserUpdateFeatureKey,
  iamUserEditReducer,
} from './user-edit.reducer';

export const provideUserCreateStore = () => [
  provideState(iamUserUpdateFeatureKey, iamUserEditReducer),
  provideEffects({
    loadUserEffect,
    updatedUserEffect,
  }),
];
