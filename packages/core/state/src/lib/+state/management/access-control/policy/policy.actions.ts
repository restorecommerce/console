import { createAction, props } from '@ngrx/store';

import {
  IIoRestorecommerceResourcebaseReadRequest,
  IIoRestorecommercePolicyPolicyList,
} from '@console-core/graphql';
import { IPolicy } from '@console-core/types';

export const policyReadRequest = createAction(
  '[POLICY] Read request',
  props<{ payload: IIoRestorecommerceResourcebaseReadRequest }>()
);

export const policyReadRequestSuccess = createAction(
  '[POLICY] Read success',
  props<{ payload: IPolicy[] }>()
);

export const policyReadRequestFail = createAction(
  '[POLICY] Read fail',
  props<{ error: string }>()
);

export const policyReadOneByIdRequest = createAction(
  '[POLICY] Read one by id request',
  props<{ payload: { id: string } }>()
);

export const policyReadOneByIdRequestSuccess = createAction(
  '[POLICY] Read one by id success',
  props<{ payload: IPolicy }>()
);

export const policyReadOneByIdRequestFail = createAction(
  '[POLICY] Read one by id fail',
  props<{ error: string }>()
);

export const setSelectedId = createAction(
  '[POLICY] Set selected id',
  props<{ payload: string | null }>()
);

export const policyCreateRequest = createAction(
  '[POLICY] Policy create request',
  props<{ payload: IIoRestorecommercePolicyPolicyList }>()
);

export const policyCreateSuccess = createAction(
  '[POLICY] Policy create success',
  props<{ payload: IPolicy }>()
);

export const policyCreateFail = createAction(
  '[POLICY] Policy create fail',
  props<{ error: string }>()
);

export const policyUpdateRequest = createAction(
  '[POLICY] Policy update request',
  props<{ payload: IIoRestorecommercePolicyPolicyList }>()
);

export const policyUpdateSuccess = createAction(
  '[POLICY] Policy update success',
  props<{ payload: IPolicy }>()
);

export const policyUpdateFail = createAction(
  '[POLICY] Policy update fail',
  props<{ error: string }>()
);

export const policyRemoveRequest = createAction(
  '[POLICY] Policy remove request',
  props<{ payload: { id: string } }>()
);

export const policyRemoveSuccess = createAction(
  '[POLICY] Policy remove success',
  props<{ payload: { id: string } }>()
);

export const policyRemoveFail = createAction(
  '[POLICY] Policy remove fail',
  props<{ error: string }>()
);
