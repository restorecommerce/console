import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CreateUserCommand } from '../../commands';

import * as userCreateActions from './user-create.actions';
import * as userCreateSelectors from './user-create.selectors';

@Injectable()
export class IamUserCreateFacade {
  private readonly store = inject(Store);

  readonly loading = this.store.selectSignal(
    userCreateSelectors.selectCreateLoading
  );

  readonly success = this.store.selectSignal(
    userCreateSelectors.selectCreateSuccess
  );

  readonly error = this.store.selectSignal(
    userCreateSelectors.selectCreateError
  );

  create(command: CreateUserCommand) {
    this.store.dispatch(userCreateActions.createUser({ command }));
  }

  reset() {
    this.store.dispatch(userCreateActions.resetCreateUserState());
  }
}
