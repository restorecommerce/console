import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

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
  readonly parentIds$ = this.store.select(
    organizationSelectors.selectOrganizationParentIds
  );
  readonly parentEntities$ = this.store.select(
    organizationSelectors.selectOrganizationParentEntities
  );
  readonly parentsAll$ = this.store.select(
    organizationSelectors.selectOrganizationParentsAll
  );
  readonly selectedParentId$ = this.store.select(
    organizationSelectors.selectOrganizationSelectedParentId
  );
  readonly selectedParent$ = this.store.select(
    organizationSelectors.selectOrganizationSelectedParent
  );
  readonly childIds$ = this.store.select(
    organizationSelectors.selectOrganizationChildIds
  );
  readonly childEntities$ = this.store.select(
    organizationSelectors.selectOrganizationChildEntities
  );
  readonly childsAll$ = this.store.select(
    organizationSelectors.selectOrganizationChildsAll
  );
  readonly globalOrganizationId$ = this.store.select(
    organizationSelectors.selectOrganizationSelectedGlobalOrganizationId
  );
  readonly globalOrganization$ = this.store.select(
    organizationSelectors.selectOrganizationSelectedGlobalOrganization
  );

  readonly globalChildrenOrganizations$ = this.store.select(
    organizationSelectors.selectGlobalChildrenOrganizations
  );

  readonly globalOrganizationLeafId$ = this.store.select(
    organizationSelectors.selectGlobalOrganizationLeafId
  );

  readonly globalOrganizationLeaf$ = this.store.select(
    organizationSelectors.selectGlobalOrganizationLeaf
  );

  readonly actionStatus$ = this.store.select(
    organizationSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(organizationSelectors.selectError);

  // Actions
  setSelectedGlobalOrganizationId = (payload: string | null) =>
    this.store.dispatch(
      organizationContextActions.setSelectedGlobalOrganizationId({ payload })
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
