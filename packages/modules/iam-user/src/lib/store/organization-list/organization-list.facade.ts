import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as organizationListActions from './organization-list.actions';
import * as organizationListSelectors from './organization-list.selectors';

@Injectable()
export class OrganizationListFacade {
  private readonly store = inject(Store);

  readonly organizations = this.store.selectSignal(
    organizationListSelectors.selectOrganizationListItems
  );

  readonly error = this.store.selectSignal(
    organizationListSelectors.selectOrganizationListError
  );

  loadList() {
    this.store.dispatch(organizationListActions.loadOrganizationList());
  }
}
