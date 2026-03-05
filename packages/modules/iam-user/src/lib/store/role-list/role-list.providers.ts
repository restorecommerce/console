import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadRoleListEffect } from './role-list.effects';
import {
  roleListFeatureKey,
  roleListReducer,
} from './role-list.reducer';

export const provideRoleListStore = () => [
  provideState(roleListFeatureKey, roleListReducer),
  provideEffects({
    loadRoleListEffect,
  }),
];
