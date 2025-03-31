import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import {
  ENotificationTypes,
  IOrganization,
  TOperationStatus,
} from '@console-core/types';

import { OrganizationService, ErrorHandlingService } from '../../services';
import { AppFacade } from '../app';

import * as organizationContextActions from './organization-context.actions';
import { OrganizationContextFacade } from './organization-context.facade';

@Injectable()
export class OrganizationContextEffects {
  organizationReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(organizationContextActions.organizationContextReadRequest),
      exhaustMap(({ payload }) =>
        this.organizationService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.master_data?.organization?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const responseData =
              result?.data?.master_data?.organization?.Read?.details?.items ||
              [];

            const payload = responseData.map((item) => ({
              ...item?.payload,
              isLeaf: !responseData.some(
                (child) => child.payload?.parentId === item.payload?.id
              ),
            })) as IOrganization[];

            return organizationContextActions.organizationContextReadRequestSuccess(
              {
                payload,
              }
            );
          }),
          catchError((error: Error) =>
            of(
              organizationContextActions.organizationContextReadRequestFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  handleOrganizationChangedNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          organizationContextActions.setSelectedOrganizationId,
          organizationContextActions.selectedGlobalOrganizationHistory,
          organizationContextActions.setPreviousSelectedGlobalOrganizationHistory,
          organizationContextActions.cancelOrganizationContextSelection
        ),
        tap(() => {
          this.appFacade.addNotification({
            content: `Organization changed to [NAME]`,
            type: ENotificationTypes.Info,
          });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly appFacade: AppFacade,
    private readonly organizationService: OrganizationService,
    private readonly organizationFacade: OrganizationContextFacade,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
