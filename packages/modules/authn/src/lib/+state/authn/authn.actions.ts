import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceUserActivateRequest,
  IIoRestorecommerceUserLoginRequest,
  IIoRestorecommerceUserRegisterRequest,
  IIoRestorecommerceUserRequestPasswordChangeRequest,
  IIoRestorecommerceUserUser,
} from '@console-core/graphql';

export const signUpRequest = createAction(
  '[AUTHN] Sign up request',
  props<{ payload: IIoRestorecommerceUserRegisterRequest }>()
);

export const signUpSuccess = createAction('[AUTHN] Sign up request success');

export const signUpError = createAction(
  '[AUTHN] Sign up request error',
  props<{ error: string }>()
);

export const activateRequest = createAction(
  '[AUTHN] Activate request',
  props<{ payload: IIoRestorecommerceUserActivateRequest }>()
);

export const activateSuccess = createAction('[AUTHN] Activate request success');

export const activateError = createAction(
  '[AUTHN] Activate request error',
  props<{ error: string }>()
);

export const signInRequest = createAction(
  '[AUTHN] Sign in request',
  props<{ payload: IIoRestorecommerceUserLoginRequest }>()
);

export const signInSuccess = createAction('[AUTHN] Sign in request success');

export const signInError = createAction(
  '[AUTHN] Sign in request error',
  props<{ error: string }>()
);

export const setUser = createAction(
  '[AUTHN] Set user',
  props<{ user: IIoRestorecommerceUserUser }>()
);

export const passwordRecoveryRequest = createAction(
  '[AUTHN] Password recovery request',
  props<{ payload: IIoRestorecommerceUserRequestPasswordChangeRequest }>()
);

export const passwordRecoverySuccess = createAction(
  '[AUTHN] Password recovery request success'
);

export const passwordRecoveryError = createAction(
  '[AUTHN] Password recovery request error',
  props<{ error: string }>()
);

export const signOut = createAction('[AUTHN] Sign out');
