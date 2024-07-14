import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceOrganizationOrganizationList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';
import { IOrganization } from '@console-core/types';

export const organizationReadRequest = createAction(
  '[ORGANIZATION] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const organizationReadRequestSuccess = createAction(
  '[ORGANIZATION] Read success',
  props<{ payload: IOrganization[] }>()
);

export const organizationReadRequestFail = createAction(
  '[ORGANIZATION] Read fail',
  props<{ error: string }>()
);

export const organizationReadParentsRequest = createAction(
  '[ORGANIZATION] Read parents request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const organizationReadParentsRequestSuccess = createAction(
  '[ORGANIZATION] Read parents success',
  props<{ payload: IOrganization[] }>()
);

export const organizationReadParentsRequestFail = createAction(
  '[ORGANIZATION] Read parents fail',
  props<{ error: string }>()
);

export const organizationReadOneByIdRequest = createAction(
  '[ORGANIZATION] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const organizationReadOneByIdRequestSuccess = createAction(
  '[ORGANIZATION] Read one by id success',
  props<{ payload: IOrganization }>()
);

export const organizationReadOneByIdRequestFail = createAction(
  '[ORGANIZATION] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[ORGANIZATION] Set selected id',
  props<{ payload: string | null }>()
);

export const setSelectedGlobalOrganizationId = createAction(
  '[ORGANIZATION] Set selected organization id',
  props<{ payload: string | null }>()
);

export const organizationCreateRequest = createAction(
  '[ORGANIZATION] Organization create request',
  props<{ payload: IIoRestorecommerceOrganizationOrganizationList }>()
);

export const organizationCreateSuccess = createAction(
  '[ORGANIZATION] Organization create success',
  props<{ payload: IOrganization }>()
);

export const organizationCreateFail = createAction(
  '[ORGANIZATION] Organization create fail',
  props<{ error: string }>()
);

export const organizationUpdateRequest = createAction(
  '[ORGANIZATION] Organization update request',
  props<{ payload: IIoRestorecommerceOrganizationOrganizationList }>()
);

export const organizationUpdateSuccess = createAction(
  '[ORGANIZATION] Organization update success',
  props<{ payload: IOrganization }>()
);

export const organizationUpdateFail = createAction(
  '[ORGANIZATION] Organization update fail',
  props<{ error: string }>()
);

export const organizationRemoveRequest = createAction(
  '[ORGANIZATION] Organization remove request',
  props<{ payload: { id: string } }>()
);

export const organizationRemoveSuccess = createAction(
  '[ORGANIZATION] Organization remove success',
  props<{ payload: { id: string } }>()
);

export const organizationRemoveFail = createAction(
  '[ORGANIZATION] Organization remove fail',
  props<{ error: string }>()
);
