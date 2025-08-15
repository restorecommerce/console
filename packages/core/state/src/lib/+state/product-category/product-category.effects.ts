import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import {
  ENotificationTypes,
  IProductCategory,
  TOperationStatus,
} from '@console-core/types';

import { ErrorHandlingService, ProductCategoryService } from '../../services';
import { AppFacade } from '../app';

import * as productCategoryActions from './product-category.actions';

@Injectable()
export class ProductCategoryEffects {
  productCategoryReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productCategoryActions.productCategoryReadRequest),
      switchMap(({ payload }) =>
        this.productCategoryService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product_category?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.catalog?.product_category?.Read?.details?.items ||
              []
            )?.map((item) => item?.payload) as IProductCategory[];
            return productCategoryActions.productCategoryReadRequestSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              productCategoryActions.productCategoryReadRequestFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  productCategoryCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productCategoryActions.productCategoryCreateRequest),
      switchMap(({ payload }) =>
        this.productCategoryService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product_category?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.catalog?.product_category?.Mutate?.details?.items?.pop()
                ?.payload as IProductCategory;
            return productCategoryActions.productCategoryCreateSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              productCategoryActions.productCategoryCreateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  productCategoryUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productCategoryActions.productCategoryUpdateRequest),
      switchMap(({ payload }) =>
        this.productCategoryService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product_category?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.catalog?.product_category?.Mutate?.details?.items?.pop()
                ?.payload as IProductCategory;
            return productCategoryActions.productCategoryUpdateSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              productCategoryActions.productCategoryUpdateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  productCategoryCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(productCategoryActions.productCategoryCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'product_category created',
            type: ENotificationTypes.Success,
          });
        }),
        tap(({ payload }) => {
          this.router.navigate(
            ROUTER.pages.main.children.products.children.categories.children.edit.getLink(
              {
                id: payload.id,
              }
            )
          );
        })
      );
    },
    { dispatch: false }
  );

  productCategoryUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(productCategoryActions.productCategoryUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'product_category updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  productCategoryRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productCategoryActions.productCategoryRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.productCategoryService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product_category?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return productCategoryActions.productCategoryRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(
              productCategoryActions.productCategoryRemoveFail({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });

  productCategoryRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(productCategoryActions.productCategoryRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'product_category deleted',
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
          productCategoryActions.productCategoryReadRequestFail,
          productCategoryActions.productCategoryCreateFail,
          productCategoryActions.productCategoryUpdateFail,
          productCategoryActions.productCategoryRemoveFail
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
    private readonly productCategoryService: ProductCategoryService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
