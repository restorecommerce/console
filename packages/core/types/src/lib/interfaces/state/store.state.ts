import { EActionStatus } from '../../enums';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStore {}

export interface IBaseStore {
  actionStatus: EActionStatus;
  error: string | null;
}
