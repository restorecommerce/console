import { IObjectUpload } from '../entities/object-upload';
import { IBaseStore } from './store.state';

export interface IObjectUploadState extends IBaseStore {
  upload: IObjectUpload | null | undefined;
}
