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

export const signUpSuccess = createAction('[AUTHN] Sign up success');

export const signUpFail = createAction(
  '[AUTHN] Sign up fail',
  props<{ error: string }>()
);

export const activateRequest = createAction(
  '[AUTHN] Activate request',
  props<{ payload: IIoRestorecommerceUserActivateRequest }>()
);

export const activateSuccess = createAction('[AUTHN] Activate success');

export const activateFail = createAction(
  '[AUTHN] Activate fail',
  props<{ error: string }>()
);

export const signInRequest = createAction(
  '[AUTHN] Sign in request',
  props<{ payload: IAuthnTokenSignInPayload }>()
);

export const signInSuccess = createAction(
  '[AUTHN] Sign in success',
  props<{ payload: IAuthnStateData }>()
);

export const signInFail = createAction(
  '[AUTHN] Sign in fail',
  props<{ error: string }>()
);

export const passwordRecoveryRequest = createAction(
  '[AUTHN] Password recovery request',
  props<{ payload: IIoRestorecommerceUserRequestPasswordChangeRequest }>()
);

export const passwordRecoverySuccess = createAction(
  '[AUTHN] Password recovery success'
);

export const passwordRecoveryFail = createAction(
  '[AUTHN] Password recovery fail',
  props<{ error: string }>()
);

export const confirmPasswordRequest = createAction(
  '[AUTHN] Confirm password change request',
  props<{ payload: IIoRestorecommerceUserConfirmPasswordChangeRequest }>()
);

export const confirmPasswordSuccess = createAction(
  '[AUTHN] Confirm password change success'
);

export const confirmPasswordFail = createAction(
  '[AUTHN] Confirm password change fail',
  props<{ error: string }>()
);

export const signOutRequest = createAction(
  '[AUTHN] Sign out request',
  props<{ payload: { showNotification: boolean } }>()
);

export const signOutSuccess = createAction(
  '[AUTHN] Sign out success',
  props<{ payload: { showNotification: boolean } }>()
);

export const signOutFail = createAction(
  '[AUTHN] Sign out fail',
  props<{ error: string; showNotification: boolean }>()
);

export const resetAuthnState = createAction('[AUTHN] Reset authn state');
