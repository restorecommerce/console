import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as orderListActions from './user-list.actions';
import * as orderListSelectors from './user-list.selectors';

@Injectable()
export class IamUserListFacade {
  private readonly store = inject(Store);

  readonly users = this.store.selectSignal(
    orderListSelectors.selectUserListItems
  );

  readonly error = this.store.selectSignal(
    orderListSelectors.selectUserListError
  );

  loadList() {
    this.store.dispatch(orderListActions.loadUserList());
  }
}
