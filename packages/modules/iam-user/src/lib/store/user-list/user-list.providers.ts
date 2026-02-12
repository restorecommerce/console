import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadUserListEffect } from './user-list.effects';
import { userListFeatureKey, userListReducer } from './user-list.reducer';

export const provideUserListStore = () => [
  provideState(userListFeatureKey, userListReducer),
  provideEffects({
    loadUserListEffect,
  }),
];
