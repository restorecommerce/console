import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {
  EActionStatus,
  IOrganization,
  IOrganizationState,
} from '@console-core/types';

import * as organizationActions from './organization.actions';

export const adapter: EntityAdapter<IOrganization> =
  createEntityAdapter<IOrganization>();

export const initialState: IOrganizationState = adapter.getInitialState({
  selectedId: null,
  selectedGlobalOrganizationId: null,
  selectedGlobalOrganizationHistory: ['system'],
  selectedParentId: null,
  parentIds: [],
  parentEntities: {},
  selectedChildId: null,
  childIds: [],
  childEntities: {},
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IOrganizationState>(
  initialState,
  on(
    organizationActions.organizationReadRequest,
    (state): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    organizationActions.organizationReadRequestSuccess,
    (state, { payload }): IOrganizationState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    organizationActions.organizationReadRequestFail,
    (state, { error }): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    organizationActions.organizationReadParentsRequest,
    (state): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    organizationActions.organizationReadParentsRequestSuccess,
    (state, { payload }): IOrganizationState => {
      const parentIds = payload.map((o) => o.id);
      const parentEntities = payload.reduce(
        (acc, o) => ({ ...acc, [o.id]: o }),
        {}
      );
      return {
        ...state,
        parentIds,
        parentEntities,
        actionStatus: EActionStatus.Succeeded,
      };
    }
  ),
  on(
    organizationActions.organizationReadParentsRequestFail,
    (state, { error }): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    organizationActions.organizationReadOneByIdRequest,
    (state): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    organizationActions.organizationReadOneByIdRequestSuccess,
    (state, { payload }): IOrganizationState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    organizationActions.organizationReadOneByIdRequestFail,
    (state, { error }): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    organizationActions.setSelectedId,
    (state, { payload }): IOrganizationState => ({
      ...state,
      selectedId: payload,
    })
  ),
  on(
    organizationActions.setSelectedGlobalOrganizationId,
    (state, { payload }): IOrganizationState => ({
      ...state,
      selectedGlobalOrganizationId: payload,
    })
  ),
  on(
    organizationActions.organizationCreateRequest,
    (state): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    organizationActions.organizationCreateSuccess,
    (state, { payload }): IOrganizationState =>
      adapter.addOne(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    organizationActions.organizationCreateFail,
    (state, { error }): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    organizationActions.organizationUpdateRequest,
    (state): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    organizationActions.organizationUpdateSuccess,
    (state, { payload }): IOrganizationState =>
      adapter.updateOne(
        { id: payload.id, changes: payload },
        {
          ...state,
          actionStatus: EActionStatus.Succeeded,
        }
      )
  ),
  on(
    organizationActions.organizationUpdateFail,
    (state, { error }): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    organizationActions.organizationRemoveRequest,
    (state): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Mutating,
    })
  ),
  on(
    organizationActions.organizationRemoveSuccess,
    (state, { payload }): IOrganizationState =>
      adapter.removeOne(payload.id, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    organizationActions.organizationRemoveFail,
    (state, { error }): IOrganizationState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  )
);

export const organizationReducer = (
  state: IOrganizationState | undefined,
  action: Action
) => reducer(state, action);
