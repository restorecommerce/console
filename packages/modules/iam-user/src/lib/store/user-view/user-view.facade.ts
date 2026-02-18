import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as userViewActions from './user-view.actions';
import * as userViewSelectors from './user-view.selectors';

@Injectable()
export class IamUserViewFacade {
  private readonly store = inject(Store);

  readonly user = this.store.selectSignal(userViewSelectors.selectFulfillment);

  readonly loading = this.store.selectSignal(userViewSelectors.selectLoading);

  readonly error = this.store.selectSignal(userViewSelectors.selectError);

  enterPage(iamUserId: string) {
    this.store.dispatch(userViewActions.enterPage({ iamUserId }));
  }

  leavePage() {
    this.store.dispatch(userViewActions.leavePage());
  }

  loadIAMUser(iamUserId: string) {
    this.store.dispatch(userViewActions.loadIAMUser({ iamUserId }));
  }
}
