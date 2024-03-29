import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import { AuthnFacade } from '@console-core/state';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard {
  constructor(
    private readonly router: Router,
    private readonly authnFacade: AuthnFacade
  ) {}

  canActivate(_: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authnFacade.isNotAuthenticated$.pipe(
      tap((isNotAuthenticated) => {
        if (!isNotAuthenticated) {
          this.router.navigate(ROUTER.pages.main.children.home.getLink(), {
            replaceUrl: true,
          });
        }
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.canActivate(route);
  }
}
