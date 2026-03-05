import { createAction, props } from '@ngrx/store';

import { OrganizationListItem } from '../../models';

export const loadOrganizationList = createAction('[Organization List] Load');

export const loadOrganizationListSuccess = createAction(
  '[Organization List] Load Success',
  props<{ items: OrganizationListItem[] }>()
);

export const loadOrganizationListFailure = createAction(
  '[Organization List] Load Failure',
  props<{ error: string }>()
);
