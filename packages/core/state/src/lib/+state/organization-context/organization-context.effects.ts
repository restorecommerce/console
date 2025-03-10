import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  IoRestorecommerceResourcebaseFilterOperation,
  IoRestorecommerceResourcebaseFilterValueType,
} from '@console-core/graphql';
import {
  ENotificationTypes,
  IOrganization,
  TOperationStatus,
} from '@console-core/types';

import { OrganizationService, ErrorHandlingService } from '../../services';
import { AppFacade } from '../app';

import * as organizationContextActions from './organization-context.actions';
import { concatLatestFrom } from '@ngrx/operators';
import { OrganizationContextFacade } from './organization-context.facade';

@Injectable()
export class OrganizationEffects {
  // organizationReadRequest$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(organizationActions.organizationReadRequest),
  //     exhaustMap(({ payload }) =>
  //       this.organizationService.read(payload).pipe(
  //         tap((result) => {
  //           this.errorHandlingService.checkStatusAndThrow(
  //             result?.data?.master_data?.organization?.Read?.details
  //               ?.operationStatus as TOperationStatus
  //           );
  //         }),
  //         map((result) => {
  //           const responseData =
  //             result?.data?.master_data?.organization?.Read?.details?.items ||
  //             [];

  //           const payload = responseData.map((item) => ({
  //             ...item?.payload,
  //             isLeaf: !responseData.some(
  //               (child) => child.payload?.parentId === item.payload?.id
  //             ),
  //           })) as IOrganization[];

  //           return organizationActions.organizationReadRequestSuccess({
  //             payload,
  //           });
  //         }),
  //         catchError((error: Error) =>
  //           of(
  //             organizationActions.organizationReadRequestFail({
  //               error: error.message,
  //             })
  //           )
  //         )
  //       )
  //     )
  //   );
  // });

  handleOrganizationChangedNotification$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          organizationContextActions.setSelectedGlobalOrganizationId,
          organizationContextActions.selectedGlobalOrganizationHistory,
          organizationContextActions.setPreviousSelectedGlobalOrganizationHistory,
          organizationContextActions.cancelOrganizationContextSelection
        ),
        concatLatestFrom(() => [
          this.organizationFacade.globalOrganizationLeaf$,
          this.organizationFacade.globalOrganization$,
        ]),
        tap(([, leafOrganization, parentOrganization]) => {
          const organization = leafOrganization || parentOrganization;
          this.appFacade.addNotification({
            content: `Organization changed to ${organization?.name}`,
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
