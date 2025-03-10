import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {
  EActionStatus,
  IOrganization,
  IOrganizationContextState,
} from '@console-core/types';

import * as organizationActions from './organization-context.actions';

export const adapter: EntityAdapter<IOrganization> =
  createEntityAdapter<IOrganization>();

export const initialState: IOrganizationContextState = adapter.getInitialState({
  selectedId: null,
  selectedGlobalOrganizationId: null,
  selectedGlobalOrganizationHistory: ['system'],
  selectedParentId: null,
  parentIds: [],
  parentEntities: {},
  selectedChildId: null,
  childIds: [],
  childEntities: {},
  setSelectedGlobalLeaf: null,
  actionStatus: EActionStatus.INIT,
  error: null,
});

const reducer = createReducer<IOrganizationContextState>(
  initialState,
  on(
    organizationActions.organizationContextReadRequest,
    (state): IOrganizationContextState => ({
      ...state,
      actionStatus: EActionStatus.Requesting,
    })
  ),
  on(
    organizationActions.organizationContextReadRequestSuccess,
    (state, { payload }): IOrganizationContextState =>
      adapter.setAll(payload, {
        ...state,
        actionStatus: EActionStatus.Succeeded,
      })
  ),
  on(
    organizationActions.organizationContextReadRequestFail,
    (state, { error }): IOrganizationContextState => ({
      ...state,
      actionStatus: EActionStatus.Failed,
      error,
    })
  ),
  on(
    organizationActions.setSelectedOrganizationId,
    (state, { payload }): IOrganizationContextState => {
      return {
        ...state,
        selectedId: payload,
      };
    }
  ),
  on(
    organizationActions.selectedGlobalOrganizationHistory,
    (state): IOrganizationContextState => ({
      ...state,
      selectedGlobalOrganizationHistory:
        initialState.selectedGlobalOrganizationHistory,
    })
  ),

  on(
    organizationActions.setPreviousSelectedGlobalOrganizationHistory,
    (state): IOrganizationContextState => ({
      ...state,
      setSelectedGlobalLeaf: null,
      selectedGlobalOrganizationHistory:
        state.selectedGlobalOrganizationHistory.slice(0, -1),
    })
  ),
  on(
    organizationActions.cancelOrganizationContextSelection,
    (state): IOrganizationContextState => ({
      ...state,
      setSelectedGlobalLeaf: null,
      selectedGlobalOrganizationHistory:
        state.selectedGlobalOrganizationHistory.slice(),
    })
  )
);

export const organizationContextReducer = (
  state: IOrganizationContextState | undefined,
  action: Action
) => reducer(state, action);
