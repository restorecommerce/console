import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import { AuthnFacade } from '@console-core/state';

@Injectable({
  providedIn: 'root',
})
export class PrivateGuard {
  constructor(
    private readonly router: Router,
    private readonly authnFacade: AuthnFacade
  ) {}

  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authnFacade.isAuthenticated$.pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(ROUTER.pages.main.children.auth.getLink(), {
            replaceUrl: true,
            queryParams: {
              url:
                state.url !==
                ROUTER.pages.main.children.auth.children.signOut.link
                  ? state.url
                  : ROUTER.pages.main.children.home.link,
            },
          });
        }
      })
    );
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(route, state);
  }
}
