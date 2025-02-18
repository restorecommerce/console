// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

// import { ROUTER } from '@console-core/config';
// import {
//   IoRestorecommerceResourcebaseFilterOperation,
//   IoRestorecommerceResourcebaseFilterValueType,
// } from '@console-core/graphql';
// import {
//   ENotificationTypes,
//   IShop,
//   TOperationStatus,
// } from '@console-core/types';

// import { CountryService, ErrorHandlingService } from '../../../services';
// import { AppFacade } from '../../app';

// import * as shopActions from './shop.actions';
// import {
//   OrganizationFacade,
//   withLatestOrganizationData,
// } from '@console-core/state';

// @Injectable()
// export class ShopEffects {
//   shopReadRequest$ = createEffect(() => {
//     return this.actions$.pipe(
//       withLatestOrganizationData(
//         this.organizationFacade,
//         shopActions.shopReadRequest.type
//       ),
//       exhaustMap(([action, organization]) =>
//         this.countryService
//           .read({
//             // ...productActionPayload,
//             filters: [
//               {
//                 filters: [
//                   {
//                     field: 'meta.owners[*].attributes[**].value',
//                     operation: IoRestorecommerceResourcebaseFilterOperation.In,
//                     value: organization,
//                   },
//                 ],
//               },
//             ],
//           })
//           .pipe(
//             tap((result) => {
//               this.errorHandlingService.checkStatusAndThrow(
//                 result?.data?.master_data?.country?.Read?.details
//                   ?.operationStatus as TOperationStatus
//               );
//             }),
//             map((result) => {
//               const payload = (
//                 result?.data?.master_data?.country?.Read?.details?.items || []
//               )?.map((item) => item?.payload) as IShop[];
//               return shopActions.countryReadRequestSuccess({ payload });
//             }),
//             catchError((error: Error) =>
//               of(shopActions.countryReadRequestFail({ error: error.message }))
//             )
//           )
//       )
//     );
//   });

//   countryReadOneByIdRequest$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(shopActions.countryReadOneByIdRequest),
//       exhaustMap(({ payload }) =>
//         this.countryService
//           .read({
//             filters: [
//               {
//                 filters: [
//                   {
//                     field: 'id',
//                     value: payload.id,
//                     type: IoRestorecommerceResourcebaseFilterValueType.String,
//                     operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
//                   },
//                 ],
//               },
//             ],
//             limit: 1,
//           })
//           .pipe(
//             tap((result) => {
//               this.errorHandlingService.checkStatusAndThrow(
//                 result?.data?.master_data?.country?.Read?.details
//                   ?.operationStatus as TOperationStatus
//               );
//             }),
//             map((result) => {
//               const payload =
//                 result?.data?.master_data?.country?.Read?.details?.items?.pop()
//                   ?.payload as ICountry;
//               return shopActions.countryReadOneByIdRequestSuccess({
//                 payload,
//               });
//             }),
//             catchError((error: Error) =>
//               of(
//                 shopActions.countryReadOneByIdRequestFail({
//                   error: error.message,
//                 })
//               )
//             )
//           )
//       )
//     );
//   });

//   countryCreateRequest$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(shopActions.countryCreateRequest),
//       switchMap(({ payload }) =>
//         this.countryService.mutate(payload).pipe(
//           tap((result) => {
//             this.errorHandlingService.checkStatusAndThrow(
//               result?.data?.master_data?.country?.Mutate?.details
//                 ?.operationStatus as TOperationStatus
//             );
//           }),
//           map((result) => {
//             const payload =
//               result?.data?.master_data?.country?.Mutate?.details?.items?.pop()
//                 ?.payload as ICountry;
//             return shopActions.countryCreateSuccess({ payload });
//           }),
//           catchError((error: Error) =>
//             of(shopActions.countryCreateFail({ error: error.message }))
//           )
//         )
//       )
//     );
//   });

//   countryCreateSuccess$ = createEffect(
//     () => {
//       return this.actions$.pipe(
//         ofType(shopActions.countryCreateSuccess),
//         tap(() => {
//           this.appFacade.addNotification({
//             content: 'country created',
//             type: ENotificationTypes.Success,
//           });
//         }),
//         tap(({ payload }) => {
//           this.router.navigate(
//             ROUTER.pages.main.children.management.children.countries.children.edit.getLink(
//               { id: payload.id }
//             )
//           );
//         })
//       );
//     },
//     { dispatch: false }
//   );

//   countryUpdateRequest$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(shopActions.countryUpdateRequest),
//       switchMap(({ payload }) =>
//         this.countryService.mutate(payload).pipe(
//           tap((result) => {
//             this.errorHandlingService.checkStatusAndThrow(
//               result?.data?.master_data?.country?.Mutate?.details
//                 ?.operationStatus as TOperationStatus
//             );
//           }),
//           map((result) => {
//             const payload =
//               result?.data?.master_data?.country?.Mutate?.details?.items?.pop()
//                 ?.payload as ICountry;
//             return shopActions.countryUpdateSuccess({ payload });
//           }),
//           catchError((error: Error) =>
//             of(shopActions.countryUpdateFail({ error: error.message }))
//           )
//         )
//       )
//     );
//   });

//   countryUpdateSuccess$ = createEffect(
//     () => {
//       return this.actions$.pipe(
//         ofType(shopActions.countryUpdateSuccess),
//         tap(() => {
//           this.appFacade.addNotification({
//             content: 'country updated',
//             type: ENotificationTypes.Success,
//           });
//         })
//       );
//     },
//     { dispatch: false }
//   );

//   countryRemoveRequest$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(shopActions.countryRemoveRequest),
//       switchMap(({ payload }) => {
//         const id = payload.id;
//         return this.countryService.remove({ ids: [id] }).pipe(
//           tap((result) => {
//             this.errorHandlingService.checkStatusAndThrow(
//               result?.data?.master_data?.country?.Delete?.details
//                 ?.operationStatus as TOperationStatus
//             );
//           }),
//           map(() => {
//             return shopActions.countryRemoveSuccess({
//               payload: { id },
//             });
//           }),
//           catchError((error: Error) =>
//             of(shopActions.countryRemoveFail({ error: error.message }))
//           )
//         );
//       })
//     );
//   });

//   countryRemoveSuccess$ = createEffect(
//     () => {
//       return this.actions$.pipe(
//         ofType(shopActions.countryRemoveSuccess),
//         tap(() => {
//           this.appFacade.addNotification({
//             content: 'country deleted',
//             type: ENotificationTypes.Success,
//           });
//         })
//       );
//     },
//     { dispatch: false }
//   );

//   handleNotificationErrors$ = createEffect(
//     () => {
//       return this.actions$.pipe(
//         ofType(
//           shopActions.countryReadRequestFail,
//           shopActions.countryReadOneByIdRequestFail,
//           shopActions.countryCreateFail,
//           shopActions.countryUpdateFail,
//           shopActions.countryRemoveFail
//         ),
//         tap(({ error }) => {
//           this.appFacade.addNotification({
//             content: error ?? 'unknown error',
//             type: ENotificationTypes.Error,
//           });
//         })
//       );
//     },
//     { dispatch: false }
//   );

//   constructor(
//     private readonly router: Router,
//     private readonly actions$: Actions,
//     private readonly appFacade: AppFacade,
//     private readonly countryService: CountryService,
//     private readonly organizationFacade: OrganizationFacade,
//     private readonly errorHandlingService: ErrorHandlingService
//   ) {}
// }
