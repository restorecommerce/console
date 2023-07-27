import { Action, createReducer, on } from '@ngrx/store';
import * as dayjs from 'dayjs';

import { REGEX, STORE } from '@console-core/config';
import { EActionStatus, IAppState, INotification } from '@console-core/types';

import * as appActions from './app.actions';

export const initialState: IAppState = {
  notifications: [],
  actionStatus: EActionStatus.INIT,
  error: null,
};

const reducer = createReducer<IAppState>(
  initialState,
  on(appActions.addNotification, (state, { payload }): IAppState => {
    const capitalizeFirstLetter = (s: string): string =>
      s.charAt(0).toUpperCase() + s.slice(1);

    // Format the notification payload
    const newNotification: INotification = {
      ...payload,
      title: capitalizeFirstLetter(payload.type),
      content: capitalizeFirstLetter(payload.content),
      date: dayjs().toDate(),
    };

    // Format the GraphQL error unknown message
    if (REGEX.graphql.errors.unknown.test(newNotification.content)) {
      const message =
        "Sorry, we're having some trouble connecting to our servers. Please try again later.";
      newNotification.content = newNotification.content.replace(
        REGEX.graphql.errors.unknown,
        message
      );
    }

    return {
      ...state,
      notifications: [newNotification, ...state.notifications],
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
