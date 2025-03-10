import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IIoRestorecommerceResourcebaseReadRequest } from '@console-core/graphql';

import * as organizationContextActions from './organization-context.actions';
import * as organizationSelectors from './organization-context.selector';

@Injectable()
export class OrganizationContextFacade {
  // Selectors
  readonly ids$ = this.store.select(
    organizationSelectors.selectOrganizationIds
  );
  readonly entities$ = this.store.select(
    organizationSelectors.selectOrganizationEntities
  );
  readonly all$ = this.store.select(
    organizationSelectors.selectOrganizationAll
  );
  readonly total$ = this.store.select(
    organizationSelectors.selectOrganizationTotal
  );
  readonly selectedId$ = this.store.select(
    organizationSelectors.selectOrganizationSelectedId
  );
  readonly selected$ = this.store.select(
    organizationSelectors.selectOrganizationSelected
  );

  readonly actionStatus$ = this.store.select(
    organizationSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(organizationSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(
      organizationContextActions.organizationContextReadRequest({ payload })
    );

  setSelectedOrganizationId = (payload: string | null) =>
    this.store.dispatch(
      organizationContextActions.setSelectedOrganizationId({ payload })
    );

  resetSelectedGlobalOrganization = () =>
    this.store.dispatch(
      organizationContextActions.selectedGlobalOrganizationHistory()
    );

  lastSelectedGlobalOrganization = () =>
    this.store.dispatch(
      organizationContextActions.setPreviousSelectedGlobalOrganizationHistory()
    );

  cancelSelection = () =>
    this.store.dispatch(
      organizationContextActions.cancelOrganizationContextSelection()
    );

  constructor(private readonly store: Store) {}
}
