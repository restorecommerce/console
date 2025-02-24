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
  IPolicy,
  TOperationStatus,
} from '@console-core/types';

import { PolicyService, ErrorHandlingService } from '../../../../services';
import { AppFacade } from '../../../app';

import * as policyActions from './policy.actions';

@Injectable()
export class PolicyEffects {
  policyReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(policyActions.policyReadRequest),
      exhaustMap(({ payload }) =>
        this.policyService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.access_control?.policy?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.access_control?.policy?.Read?.details?.items || []
            )?.map((item) => item?.payload) as IPolicy[];
            return policyActions.policyReadRequestSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(policyActions.policyReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  // roleReadOneByIdRequest$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(policyActions.policyReadOneByIdRequest),
  //     exhaustMap(({ payload }) =>
  //       this.policyService
  //         .read({
  //           filters: [
  //             {
  //               filters: [
  //                 {
  //                   field: 'id',
  //                   value: payload.id,
  //                   type: IoRestorecommerceResourcebaseFilterValueType.String,
  //                   operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
  //                 },
  //               ],
  //             },
  //           ],
  //           limit: 1,
  //         })
  //         .pipe(
  //           tap((result) => {
  //             this.errorHandlingService.checkStatusAndThrow(
  //               result?.data?.identity?.role?.Read?.details
  //                 ?.operationStatus as TOperationStatus
  //             );
  //           }),
  //           map((result) => {
  //             const payload =
  //               result?.data?.identity?.role?.Read?.details?.items?.pop()
  //                 ?.payload as IRole;
  //             return policyActions.policyReadOneByIdRequestSuccess({
  //               payload,
  //             });
  //           }),
  //           catchError((error: Error) =>
  //             of(
  //               policyActions.policyReadOneByIdRequestFail({
  //                 error: error.message,
  //               })
  //             )
  //           )
  //         )
  //     )
  //   );
  // });

  // roleCreateRequest$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(policyActions.policyCreateRequest),
  //     switchMap(({ payload }) =>
  //       this.policyService.mutate(payload).pipe(
  //         tap((result) => {
  //           this.errorHandlingService.checkStatusAndThrow(
  //             result?.data?.identity?.role?.Mutate?.details
  //               ?.operationStatus as TOperationStatus
  //           );
  //         }),
  //         map((result) => {
  //           const payload =
  //             result?.data?.identity?.role?.Mutate?.details?.items?.pop()
  //               ?.payload as IRole;
  //           return policyActions.policyCreateSuccess({ payload });
  //         }),
  //         catchError((error: Error) =>
  //           of(policyActions.policyCreateFail({ error: error.message }))
  //         )
  //       )
  //     )
  //   );
  // });

  // roleCreateSuccess$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(policyActions.policyCreateSuccess),
  //       tap(() => {
  //         this.appFacade.addNotification({
  //           content: 'role created',
  //           type: ENotificationTypes.Success,
  //         });
  //       }),
  //       tap(({ payload }) => {
  //         this.router.navigate(
  //           ROUTER.pages.main.children.management.children.accessControl.children.roles.children.edit.getLink(
  //             { id: payload.id }
  //           )
  //         );
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );

  // roleUpdateRequest$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(policyActions.policyUpdateRequest),
  //     switchMap(({ payload }) =>
  //       this.policyService.mutate(payload).pipe(
  //         tap((result) => {
  //           this.errorHandlingService.checkStatusAndThrow(
  //             result?.data?.identity?.role?.Mutate?.details
  //               ?.operationStatus as TOperationStatus
  //           );
  //         }),
  //         map((result) => {
  //           const payload =
  //             result?.data?.identity?.role?.Mutate?.details?.items?.pop()
  //               ?.payload as IRole;
  //           return policyActions.policyUpdateSuccess({ payload });
  //         }),
  //         catchError((error: Error) =>
  //           of(policyActions.policyUpdateFail({ error: error.message }))
  //         )
  //       )
  //     )
  //   );
  // });

  // roleUpdateSuccess$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(policyActions.policyUpdateSuccess),
  //       tap(() => {
  //         this.appFacade.addNotification({
  //           content: 'role updated',
  //           type: ENotificationTypes.Success,
  //         });
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );

  // roleRemoveRequest$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(policyActions.policyRemoveRequest),
  //     switchMap(({ payload }) => {
  //       const id = payload.id;
  //       return this.policyService.remove({ ids: [id] }).pipe(
  //         tap((result) => {
  //           this.errorHandlingService.checkStatusAndThrow(
  //             result?.data?.identity?.role?.Delete?.details
  //               ?.operationStatus as TOperationStatus
  //           );
  //         }),
  //         map(() => {
  //           return policyActions.policyRemoveSuccess({
  //             payload: { id },
  //           });
  //         }),
  //         catchError((error: Error) =>
  //           of(policyActions.policyRemoveFail({ error: error.message }))
  //         )
  //       );
  //     })
  //   );
  // });

  // roleRemoveSuccess$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(policyActions.policyRemoveSuccess),
  //       tap(() => {
  //         this.appFacade.addNotification({
  //           content: 'role deleted',
  //           type: ENotificationTypes.Success,
  //         });
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          policyActions.policyReadRequestFail,
          policyActions.policyReadOneByIdRequestFail,
          policyActions.policyCreateFail,
          policyActions.policyUpdateFail,
          policyActions.policyRemoveFail
        ),
        tap(({ error }) => {
          this.appFacade.addNotification({
            content: error ?? 'unknown error',
            type: ENotificationTypes.Error,
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
    private readonly policyService: PolicyService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
