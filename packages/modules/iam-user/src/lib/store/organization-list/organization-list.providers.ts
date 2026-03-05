import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { loadOrganizationListEffect } from './organization-list.effects';
import {
  organizationListFeatureKey,
  organizationListReducer,
} from './organization-list.reducer';

export const provideOrganizationListStore = () => [
  provideState(organizationListFeatureKey, organizationListReducer),
  provideEffects({
    loadOrganizationListEffect,
  }),
];
