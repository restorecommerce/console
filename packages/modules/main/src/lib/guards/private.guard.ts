import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import { SecurityFacade } from '@console-core/store/security';

@Injectable({
  providedIn: 'root',
})
export class PrivateGuard implements CanActivate, CanActivateChild {
  constructor(
    private readonly router: Router,
    private readonly securityFacade: SecurityFacade
  ) {}

  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.securityFacade.isAuthenticated$.pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate([ROUTER.pages.main.children.auth.link], {
            replaceUrl: true,
            queryParams: { url: state.url },
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
