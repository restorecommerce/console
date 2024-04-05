import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceCountryCountryList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { ICountry } from '@console-core/types';

export const countryReadRequest = createAction(
  '[COUNTRY] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const countryReadRequestSuccess = createAction(
  '[COUNTRY] Read success',
  props<{ payload: ICountry[] }>()
);

export const countryReadRequestFail = createAction(
  '[COUNTRY] Read fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[COUNTRY] Set selected id',
  props<{ payload: string | null }>()
);

export const countryCreateRequest = createAction(
  '[COUNTRY] Country create request',
  props<{ payload: IIoRestorecommerceCountryCountryList }>()
);

export const countryCreateSuccess = createAction(
  '[COUNTRY] Country create success',
  props<{ payload: ICountry }>()
);

export const countryCreateFail = createAction(
  '[COUNTRY] Country create fail',
  props<{ error: string }>()
);

export const countryUpdateRequest = createAction(
  '[COUNTRY] Country update request',
  props<{ payload: IIoRestorecommerceCountryCountryList }>()
);

export const countryUpdateSuccess = createAction(
  '[COUNTRY] Country update success',
  props<{ payload: ICountry }>()
);

export const countryUpdateFail = createAction(
  '[COUNTRY] Country update fail',
  props<{ error: string }>()
);

export const countryRemoveRequest = createAction(
  '[COUNTRY] Country remove request',
  props<{ payload: { id: string } }>()
);

export const countryRemoveSuccess = createAction(
  '[COUNTRY] Country remove success',
  props<{ payload: { id: string } }>()
);

export const countryRemoveFail = createAction(
  '[COUNTRY] Country remove fail',
  props<{ error: string }>()
);
