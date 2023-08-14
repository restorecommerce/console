import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceUserActivateRequest,
  IIoRestorecommerceUserConfirmPasswordChangeRequest,
  IIoRestorecommerceUserRegisterRequest,
  IIoRestorecommerceUserRequestPasswordChangeRequest,
} from '@console-core/graphql';
import { IAuthnStateData, IAuthnTokenSignInPayload } from '@console-core/types';

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
  props<{ payload: IAuthnTokenSignInPayload }>()
);

export const signInSuccess = createAction(
  '[AUTHN] Sign in request success',
  props<{ payload: IAuthnStateData }>()
);

export const signInError = createAction(
  '[AUTHN] Sign in request error',
  props<{ error: string }>()
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

export const confirmPasswordRequest = createAction(
  '[AUTHN] Confirm password change request',
  props<{ payload: IIoRestorecommerceUserConfirmPasswordChangeRequest }>()
);

export const confirmPasswordSuccess = createAction(
  '[AUTHN] Confirm password change request success'
);

export const confirmPasswordError = createAction(
  '[AUTHN] Confirm password change request error',
  props<{ error: string }>()
);

export const signOut = createAction('[AUTHN] Sign out');

export const resetAuthnState = createAction('[AUTHN] Reset authn state');
