import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as roleListActions from './role-list.actions';
import * as roleListSelectors from './role-list.selectors';

@Injectable()
export class RoleListFacade {
  private readonly store = inject(Store);

  readonly roles = this.store.selectSignal(
    roleListSelectors.selectRoleListItems
  );

  readonly error = this.store.selectSignal(
    roleListSelectors.selectRoleListError
  );

  loadList() {
    this.store.dispatch(roleListActions.loadRoleList());
  }
}
