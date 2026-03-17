import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import {
  loadUserCreationEffect,
  navigateAfterCreateEffect,
} from './user-create.effects';
import {
  iamUserCreateFeatureKey,
  iamUserCreateReducer,
} from './user-create.reducer';

export const provideUserCreateStore = () => [
  provideState(iamUserCreateFeatureKey, iamUserCreateReducer),
  provideEffects({
    loadUserCreationEffect,
    navigateAfterCreateEffect,
  }),
];
