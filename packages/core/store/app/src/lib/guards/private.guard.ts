import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';

import { AppFacade } from '../+state/app';

@Injectable({
  providedIn: 'root',
})
export class PrivateGuard {
  constructor(
    private readonly router: Router,
    private readonly appFacade: AppFacade
  ) {}

  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.appFacade.isAuthenticated$.pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate([ROUTER.pages.main.children.auth.link], {
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
