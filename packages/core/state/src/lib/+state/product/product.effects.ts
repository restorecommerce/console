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
  IProduct,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, ProductService } from '../../services';
import { AppFacade } from '../app';

import * as productActions from './product.actions';
import { productReadOneByIdRequest } from './product.actions';

@Injectable()
export class ProductEffects {
  productReadRequest$ = createEffect(() => {
    let isLoadMore = false;
    return this.actions$.pipe(
      ofType(productActions.productReadRequest),
      exhaustMap(({ payload }) =>
        this.productService.read(payload).pipe(
          tap((result) => {
            if (payload.offset) {
              isLoadMore = payload.offset > 0;
            }
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const items = (
              result?.data?.catalog?.product?.Read?.details?.items || []
            )?.map((item) => item?.payload) as IProduct[];
            const payload = {
              items: items,
              isLoadMore,
            };
            return productActions.productReadRequestSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(productActions.productReadRequestFail({ error: error.message }))
          )
        )
      )
    );
  });

  productReadOneByIdRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productReadOneByIdRequest),
      exhaustMap(({ payload }) =>
        this.productService
          .read({
            filters: [
              {
                filters: [
                  {
                    field: 'id',
                    value: payload.id,
                    type: IoRestorecommerceResourcebaseFilterValueType.String,
                    operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
                  },
                ],
              },
            ],
            limit: 1,
          })
          .pipe(
            map((result) => {
              const payload =
                result?.data?.catalog?.product?.Read?.details?.items?.pop()
                  ?.payload as IProduct;
              return productActions.productReadOneByIdRequestSuccess({
                payload,
              });
            }),
            catchError((error: Error) =>
              of(
                productActions.productReadOneByIdRequestFail({
                  error: error.message,
                })
              )
            )
          )
      )
    );
  });

  productCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productActions.productCreateRequest),
      switchMap(({ payload }) =>
        this.productService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.catalog?.product?.Mutate?.details?.items?.pop()
                ?.payload as IProduct;
            return productActions.productCreateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(productActions.productCreateFail({ error: error.message }))
          )
        )
      )
    );
  });

  productCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(productActions.productCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'product created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.products.children.edit.getLink({
              id: payload.id,
            })
          );
        })
      );
    },
    { dispatch: false }
  );

  productUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productActions.productUpdateRequest),
      switchMap(({ payload }) =>
        this.productService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.catalog?.product?.Mutate?.details?.items?.pop()
                ?.payload as IProduct;
            return productActions.productUpdateSuccess({ payload });
          }),
          catchError((error: Error) =>
            of(productActions.productUpdateFail({ error: error.message }))
          )
        )
      )
    );
  });

  productUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(productActions.productUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'product updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  productRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productActions.productRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.productService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return productActions.productRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(productActions.productRemoveFail({ error: error.message }))
          )
        );
      })
    );
  });

  productRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(productActions.productRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'product deleted',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  handleNotificationErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          productActions.productReadRequestFail,
          productActions.productReadOneByIdRequestFail,
          productActions.productCreateFail,
          productActions.productUpdateFail,
          productActions.productRemoveFail
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
    private readonly productService: ProductService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
