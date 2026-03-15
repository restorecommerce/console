import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { UpdateUserCommand } from '../../commands';

import * as userUpdateActions from './user-edit.actions';
import * as userUpdateSelectors from './user-edit.selectors';

@Injectable()
export class IamUserEditFacade {
  private readonly store = inject(Store);

  readonly user = this.store.selectSignal(userUpdateSelectors.selectUser);

  readonly loading = this.store.selectSignal(userUpdateSelectors.selectLoading);

  readonly saving = this.store.selectSignal(userUpdateSelectors.selectSaving);

  readonly error = this.store.selectSignal(userUpdateSelectors.selectError);

  update(command: UpdateUserCommand) {
    this.store.dispatch(userUpdateActions.updateUser({ command }));
  }

  reset() {
    this.store.dispatch(userUpdateActions.resetUpdateUserState());
  }
}
