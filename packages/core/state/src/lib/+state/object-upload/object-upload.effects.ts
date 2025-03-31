import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { IMeta } from '@console-core/types';

import { ObjectUploadService } from '../../services';

import * as objectUploadActions from './object-upload.actions';
import { APP } from '@console-core/config';

//     file,
//     'http://localhost:5000/graphql',
//     'public',
//     `nfuse-shop/${file.name}`,
//     'WrIBDwBPKNFQ0bBL_FQple6o4pzyqEGB1BT60Qtml5r',
//     meta

@Injectable()
export class ObjectUploadEffects {
  objectUploadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(objectUploadActions.objectUploadRequest),
      exhaustMap(({ payload }) => {
        const meta: Partial<IMeta> = {
          owners: [
            {
              id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
              value: 'urn:restorecommerce:acs:model:organization.Organization',
              attributes: [
                {
                  id: 'urn:restorecommerce:acs:names:ownerInstance',
                  value: 'nfuse-shop-000-organization',
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
            `APP.objectUpload.keyPrefix/${payload.name}`,
            meta
          )
          .pipe(
            map((result) => {
              console.log('****result of upload', result);

              // const responseData =
              //   result?.data?.ostorage?.organization?.Read?.details?.items ||
              //   [];

              // const payload = responseData.map((item) => ({
              //   ...item?.payload,
              //   isLeaf: !responseData.some(
              //     (child) => child.payload?.parentId === item.payload?.id
              //   ),
              // })) as IOrganization[];

              // return organizationContextActions.organizationContextReadRequestSuccess(
              //   {
              //     payload,
              //   }
              // );

              return {
                type: 'NULL',
              };
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
    private readonly objectUploadService: ObjectUploadService
  ) {}
}
