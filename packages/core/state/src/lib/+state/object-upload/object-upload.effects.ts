import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { APP } from '@console-core/config';
import { IMeta, IObjectUpload } from '@console-core/types';

import { ObjectUploadService } from '../../services';
import { AuthnFacade } from '../authn';
import { OrganizationContextFacade } from '../organization-context';

import * as objectUploadActions from './object-upload.actions';

@Injectable()
export class ObjectUploadEffects {
  objectUploadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(objectUploadActions.objectUploadRequest),
      concatLatestFrom(() => [
        this.authnFacade.token$,
        this.organizationContext.selectedId$,
      ]),
      exhaustMap(([{ payload }, token, organizationContextId]) => {
        const meta: Partial<IMeta> = {
          owners: [
            {
              id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
              value: 'urn:restorecommerce:acs:model:organization.Organization',
              attributes: [
                {
                  id: 'urn:restorecommerce:acs:names:ownerInstance',
                  value: organizationContextId as string,
                  attributes: [],
                },
              ],
            },
          ],
        };

        return this.objectUploadService
          .uploadFile(
            payload,
            APP.objectUpload.storageURL,
            APP.objectUpload.bucketName,
            `${APP.objectUpload.keyPrefix}/${payload.name}`,
            meta,
            token as string
          )
          .pipe(
            map((result) => {
              const payload = result?.data?.ostorage?.object?.Put?.details
                ?.response?.payload as IObjectUpload;

              return objectUploadActions.objectUploadSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                objectUploadActions.objectUploadFail({
                  error: error.message,
                })
              )
            )
          );
      })
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly authnFacade: AuthnFacade,
    private readonly organizationContext: OrganizationContextFacade,
    private readonly objectUploadService: ObjectUploadService
  ) {}
}
