import { Action, createReducer, on } from '@ngrx/store';
import * as dayjs from 'dayjs';

import { STORE } from '@console-core/config';
import { EActionStatus, IAppState, INotification } from '@console-core/types';

import {
  capitalizeFirstLetter,
  handleHttpResponseErrorContent,
} from '../../utils';

import * as appActions from './app.actions';

export const initialState: IAppState = {
  notifications: [],
  actionStatus: EActionStatus.INIT,
  error: null,
};

const reducer = createReducer<IAppState>(
  initialState,
  on(appActions.addNotification, (state, { payload }): IAppState => {
    // Format the notification payload
    const notification: INotification = {
      ...payload,
      title: capitalizeFirstLetter(payload.type),
      content: capitalizeFirstLetter(
        handleHttpResponseErrorContent(payload.content)
      ),
      date: dayjs().toDate(),
    };

    return {
      ...state,
      notifications: [notification, ...state.notifications],
      actionStatus: EActionStatus.SUCCEEDED,
    };
  }),
  on(
    appActions.clearNotification,
    (state): IAppState => ({
      ...state,
      notifications: state.notifications.filter(
        ({ date }) =>
          STORE.config.app.notifications.delay >= dayjs().diff(dayjs(date))
      ),
      actionStatus: EActionStatus.SUCCEEDED,
    })
  )
);

export const appReducer = (state: IAppState | undefined, action: Action) =>
  reducer(state, action);
