import { IBaseStore } from './store.state';

export interface IAuthnStateData {
  token: string | null;
  expiresIn: string | null;
  lastLogin: string | null;
}

export interface IAuthnState extends IBaseStore, IAuthnStateData {
  isAuthenticated: boolean;
}
