import { IAuthnState, IStoreConstant } from '../interfaces';
type TAuthnStateKey = IStoreConstant['states']['authnState'];
export type TAuthnStateType = {
    [key in TAuthnStateKey]: IAuthnState;
};
export type TAuthnConstant = (key: string) => {
    Accept: string;
    'Content-type': string;
    Authorization: string;
};
export {};
