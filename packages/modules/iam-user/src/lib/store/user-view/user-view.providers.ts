import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadIAMUserViewEffect } from './user-view.effects';
import { userViewFeatureKey, userViewReducer } from './user-view.reducer';

export const provideIAMUserViewStore = () => [
  provideState(userViewFeatureKey, userViewReducer),
  provideEffects({
    loadIAMUserViewEffect,
  }),
];
