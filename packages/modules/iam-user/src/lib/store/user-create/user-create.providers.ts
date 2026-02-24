import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import {
  loadUserCreationEffect,
  navigateOnUserCreateSuccessEffect,
} from './user-create.effects';
import {
  iamUserCreateFeatureKey,
  iamUserCreateReducer,
} from './user-create.reducer';

export const provideUserListStore = () => [
  provideState(iamUserCreateFeatureKey, iamUserCreateReducer),
  provideEffects({
    loadUserCreationEffect,
    navigateOnUserCreateSuccessEffect,
  }),
];
