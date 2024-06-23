import { TAuthnConstant } from '@console-core/types';

export const AUTH = (key: string): Readonly<TAuthnConstant> => ({
  Accept: 'application/json',
  'Content-type': 'application/x-www-form-urlencoded',
  Authorization: `Basic ${key}`,
});
