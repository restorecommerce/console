import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  IIoRestorecommerceOrganizationOrganizationList,
  IIoRestorecommerceResourcebaseReadRequest,
} from '@console-core/graphql';

import * as organizationActions from './organization.actions';
import * as organizationSelectors from './organization.selectors';

@Injectable()
export class OrganizationFacade {
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

  readonly actionStatus$ = this.store.select(
    organizationSelectors.selectActionStatus
  );
  readonly error$ = this.store.select(organizationSelectors.selectError);

  // Actions
  read = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(
      organizationActions.organizationReadRequest({ payload })
    );
  readParents = (payload: IIoRestorecommerceResourcebaseReadRequest) =>
    this.store.dispatch(
      organizationActions.organizationReadParentsRequest({ payload })
    );
  readOneById = (payload: { id: string }) =>
    this.store.dispatch(
      organizationActions.organizationReadOneByIdRequest({ payload })
    );
  setSelectedId = (payload: string | null) =>
    this.store.dispatch(organizationActions.setSelectedId({ payload }));

  create = (payload: IIoRestorecommerceOrganizationOrganizationList) =>
    this.store.dispatch(
      organizationActions.organizationCreateRequest({ payload })
    );
  update = (payload: IIoRestorecommerceOrganizationOrganizationList) =>
    this.store.dispatch(
      organizationActions.organizationUpdateRequest({ payload })
    );
  remove = (payload: { id: string }) =>
    this.store.dispatch(
      organizationActions.organizationRemoveRequest({ payload })
    );

  constructor(private readonly store: Store) {}
}
