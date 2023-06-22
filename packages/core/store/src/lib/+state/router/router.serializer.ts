import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

import { IRouterState } from '@console-core/types';

export class RouterSerializer implements RouterStateSerializer<IRouterState> {
  serialize(routerState: RouterStateSnapshot): IRouterState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { data, params } = route;

    return { url, data, params, queryParams };
  }
}
