import { createAction, props } from '@ngrx/store';

import { IIoRestorecommerceUserFindByTokenRequest } from '@console-core/graphql';
import { IProfile } from '@console-core/types';

export const findUserByTokenRequest = createAction(
  '[ACCOUNT] Find user by token request',
  props<{ payload: IIoRestorecommerceUserFindByTokenRequest }>()
);

export const findUserByTokenSuccess = createAction(
  '[ACCOUNT] Find user by token request success',
  props<{ payload: IProfile | null }>()
);

export const findUserByTokenError = createAction(
  '[ACCOUNT] Find user by token request error',
  props<{ error: string }>()
);
