import { IAuthnState, IStoreConstant } from '../interfaces';

type AuthnStateKey = IStoreConstant['states']['authnState'];

export type IAuthnStateType = {
  [key in AuthnStateKey]: IAuthnState;
};
