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
  // on(organizationActions.organizationContextReadRequest, () => {}),
  on(
    organizationActions.setSelectedGlobalOrganizationId,
    (state, { payload }): IOrganizationContextState => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const organization = state.entities[payload!];

      if (organization?.isLeaf) {
        return {
          ...state,
          setSelectedGlobalLeaf: payload,
        };
      } else {
        return {
          ...state,
          setSelectedGlobalLeaf: null,
          selectedGlobalOrganizationHistory: Array.from(
            new Set([
              ...state.selectedGlobalOrganizationHistory,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              payload!,
            ])
          ),
        };
      }
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

export const organizationReducer = (
  state: IOrganizationContextState | undefined,
  action: Action
) => reducer(state, action);
