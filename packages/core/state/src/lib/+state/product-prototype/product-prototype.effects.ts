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

import { ErrorHandlingService, ProductPrototypeService } from '../../services';
import { AppFacade } from '../app';

import * as productPrototypeActions from './product-prototype.actions';

@Injectable()
export class ProductPrototypeEffects {
  productPrototypeReadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productPrototypeActions.productPrototypeReadRequest),
      switchMap(({ payload }) =>
        this.productPrototypeService.read(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product_prototype?.Read?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload = (
              result?.data?.catalog?.product_prototype?.Read?.details?.items ||
              []
            )?.map((item) => item?.payload) as IProductCategory[];
            return productPrototypeActions.productPrototypeReadRequestSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              productPrototypeActions.productPrototypeReadRequestFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  productPrototypeCreateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productPrototypeActions.productPrototypeCreateRequest),
      switchMap(({ payload }) =>
        this.productPrototypeService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product_prototype?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.catalog?.product_prototype?.Mutate?.details?.items?.pop()
                ?.payload as IProductCategory;
            return productPrototypeActions.productPrototypeCreateSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              productPrototypeActions.productPrototypeCreateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  productPrototypeUpdateRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productPrototypeActions.productPrototypeUpdateRequest),
      switchMap(({ payload }) =>
        this.productPrototypeService.mutate(payload).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product_prototype?.Mutate?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map((result) => {
            const payload =
              result?.data?.catalog?.product_prototype?.Mutate?.details?.items?.pop()
                ?.payload as IProductCategory;
            return productPrototypeActions.productPrototypeUpdateSuccess({
              payload,
            });
          }),
          catchError((error: Error) =>
            of(
              productPrototypeActions.productPrototypeUpdateFail({
                error: error.message,
              })
            )
          )
        )
      )
    );
  });

  productPrototypeCreateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(productPrototypeActions.productPrototypeCreateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'product_prototype created',
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

  productPrototypeUpdateSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(productPrototypeActions.productPrototypeUpdateSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'product_prototype updated',
            type: ENotificationTypes.Success,
          });
        })
      );
    },
    { dispatch: false }
  );

  productPrototypeRemoveRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productPrototypeActions.productPrototypeRemoveRequest),
      switchMap(({ payload }) => {
        const id = payload.id;
        return this.productPrototypeService.remove({ ids: [id] }).pipe(
          tap((result) => {
            this.errorHandlingService.checkStatusAndThrow(
              result?.data?.catalog?.product_prototype?.Delete?.details
                ?.operationStatus as TOperationStatus
            );
          }),
          map(() => {
            return productPrototypeActions.productPrototypeRemoveSuccess({
              payload: { id },
            });
          }),
          catchError((error: Error) =>
            of(
              productPrototypeActions.productPrototypeRemoveFail({
                error: error.message,
              })
            )
          )
        );
      })
    );
  });

  productPrototypeRemoveSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(productPrototypeActions.productPrototypeRemoveSuccess),
        tap(() => {
          this.appFacade.addNotification({
            content: 'product_prototype deleted',
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
          productPrototypeActions.productPrototypeReadRequestFail,
          productPrototypeActions.productPrototypeCreateFail,
          productPrototypeActions.productPrototypeUpdateFail,
          productPrototypeActions.productPrototypeRemoveFail
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
    private readonly productPrototypeService: ProductPrototypeService,
    private readonly errorHandlingService: ErrorHandlingService
  ) {}
}
