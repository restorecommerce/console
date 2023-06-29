import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[SECURITY] Login request',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction('[SECURITY] Login request success');

export const loginError = createAction(
  '[SECURITY] Login request error',
  props<{ error: string }>()
);

export const logout = createAction('[SECURITY] Logout');
