import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as objectUploadActions from './object-upload.actions';
import * as objectUploadSelectors from './object-upload.selectors';

@Injectable()
export class ObjectUploadFacade {
  readonly uploadedObject$ = this.store.select(
    objectUploadSelectors.selectUploadedObject
  );

  readonly actionStatus$ = this.store.select(
    objectUploadSelectors.selectActionStatus
  );

  readonly error$ = this.store.select(objectUploadSelectors.selectError);

  // Actions
  upload = (payload: File) =>
    this.store.dispatch(objectUploadActions.objectUploadRequest({ payload }));

  constructor(private readonly store: Store) {}
}
