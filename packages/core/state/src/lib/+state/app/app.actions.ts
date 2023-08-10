import { createAction, props } from '@ngrx/store';

import { TNewNotification } from '@console-core/types';

export const addNotification = createAction(
  '[APP] Add notification',
  props<{ payload: TNewNotification }>()
);

export const clearNotification = createAction('[APP] Clear notification');
