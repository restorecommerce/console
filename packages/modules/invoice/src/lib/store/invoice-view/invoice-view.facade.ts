import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as userViewActions from './invoice-view.actions';
import * as userViewSelectors from './invoice-view.selectors';

@Injectable()
export class IamUserViewFacade {
  private readonly store = inject(Store);

  readonly user = this.store.selectSignal(userViewSelectors.selectInvoice);

  readonly loading = this.store.selectSignal(userViewSelectors.selectLoading);

  readonly error = this.store.selectSignal(userViewSelectors.selectError);

  enterPage(invoiceId: string) {
    this.store.dispatch(userViewActions.enterPage({ invoiceId }));
  }

  leavePage() {
    this.store.dispatch(userViewActions.leavePage());
  }

  loadInvoice(invoiceId: string) {
    this.store.dispatch(userViewActions.loadInvoice({ invoiceId }));
  }
}
