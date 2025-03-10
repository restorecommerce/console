import { createAction, props } from '@ngrx/store';

import { IIoRestorecommerceResourcebaseReadRequest } from '@console-core/graphql';
import { IOrganization } from '@console-core/types';

export const organizationContextReadRequest = createAction(
  '[ORGANIZATION CONTEXT] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const organizationContextReadRequestSuccess = createAction(
  '[ORGANIZATION CONTEXT] Read success',
  props<{ payload: IOrganization[] }>()
);

export const organizationContextReadRequestFail = createAction(
  '[ORGANIZATION CONTEXT] Read fail',
  props<{ error: string }>()
);

export const setSelectedGlobalOrganizationId = createAction(
  '[ORGANIZATION CONTEXT] Set selected organization id',
  props<{ payload: string | null }>()
);

export const selectedGlobalOrganizationHistory = createAction(
  '[ORGANIZATION CONTEXT] Set selected global organization to default'
);

export const setPreviousSelectedGlobalOrganizationHistory = createAction(
  '[ORGANIZATION CONTEXT] Set previously selected global organization'
);

export const cancelOrganizationContextSelection = createAction(
  '[ORGANIZATION CONTEXT] Set the global selected leaf to null'
);
