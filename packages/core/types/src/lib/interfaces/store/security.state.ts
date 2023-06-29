import { IBaseStore } from './store';

export interface ISecurityState extends IBaseStore {
  isAuthenticated: boolean;
}
