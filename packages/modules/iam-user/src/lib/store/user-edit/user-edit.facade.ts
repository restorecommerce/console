import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { UpdateUserCommand } from '../../commands';

import * as userUpdateActions from './user-edit.actions';
import * as userUpdateSelectors from './user-edit.selectors';

@Injectable()
export class IamUserEditFacade {
  private readonly store = inject(Store);

  readonly user = this.store.selectSignal(userUpdateSelectors.selectUser);

  readonly loading = this.store.selectSignal(
    userUpdateSelectors.selectUpdateLoading
  );

  readonly saving = this.store.selectSignal(
    userUpdateSelectors.selectUpdateSaving
  );

  readonly error = this.store.selectSignal(
    userUpdateSelectors.selectUpdateError
  );

  load(id: string) {
    this.store.dispatch(userUpdateActions.loadUser({ id }));
  }

  update(command: UpdateUserCommand) {
    this.store.dispatch(userUpdateActions.updateUser({ command }));
  }

  reset() {
    this.store.dispatch(userUpdateActions.resetUpdateUserState());
  }
}
