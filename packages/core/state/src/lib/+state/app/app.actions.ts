import { createAction, props } from '@ngrx/store';

import { TNewNotification } from '@console-core/types';

export const addNotification = createAction(
  '[APP] Add notification',
  props<{ payload: TNewNotification }>()
);

export const showNotification = createAction(
  '[APP] Show notification',
  props<{ payload: TNewNotification }>()
);

export const clearNotifications = createAction('[APP] Clear notifications');
