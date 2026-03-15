import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadEditUserEffect, updatedUserEffect } from './user-edit.effects';
import { iamUserEditFeatureKey, iamUserEditReducer } from './user-edit.reducer';

export const provideUserUpdateStore = () => [
  provideState(iamUserEditFeatureKey, iamUserEditReducer),
  provideEffects({
    loadEditUserEffect,
    updatedUserEffect,
  }),
];
