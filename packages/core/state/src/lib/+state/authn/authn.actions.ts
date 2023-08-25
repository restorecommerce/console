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

export const signUpFail = createAction(
  '[AUTHN] Sign up request fail',
  props<{ error: string }>()
);

export const activateRequest = createAction(
  '[AUTHN] Activate request',
  props<{ payload: IIoRestorecommerceUserActivateRequest }>()
);

export const activateSuccess = createAction('[AUTHN] Activate request success');

export const activateFail = createAction(
  '[AUTHN] Activate request fail',
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

export const signInFail = createAction(
  '[AUTHN] Sign in request fail',
  props<{ error: string }>()
);

export const passwordRecoveryRequest = createAction(
  '[AUTHN] Password recovery request',
  props<{ payload: IIoRestorecommerceUserRequestPasswordChangeRequest }>()
);

export const passwordRecoverySuccess = createAction(
  '[AUTHN] Password recovery request success'
);

export const passwordRecoveryFail = createAction(
  '[AUTHN] Password recovery request fail',
  props<{ error: string }>()
);

export const confirmPasswordRequest = createAction(
  '[AUTHN] Confirm password change request',
  props<{ payload: IIoRestorecommerceUserConfirmPasswordChangeRequest }>()
);

export const confirmPasswordSuccess = createAction(
  '[AUTHN] Confirm password change request success'
);

export const confirmPasswordFail = createAction(
  '[AUTHN] Confirm password change request fail',
  props<{ error: string }>()
);

export const signOut = createAction('[AUTHN] Sign out');

export const resetAuthnState = createAction('[AUTHN] Reset authn state');
