import { EActionStatus } from '../../enums';
export interface IStore {
}
export interface IBaseStore {
    actionStatus: EActionStatus;
    error: string | null;
}
