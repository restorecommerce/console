import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';
import { SecurityFacade } from '@console-core/store/security';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate, CanActivateChild {
  constructor(
    private readonly router: Router,
    private readonly securityFacade: SecurityFacade
  ) {}

  canActivate(_: ActivatedRouteSnapshot): Observable<boolean> {
    return this.securityFacade.isNotAuthenticated$.pipe(
      tap((isNotAuthenticated) => {
        if (!isNotAuthenticated) {
          this.router.navigate([ROUTER.pages.main.children.home.link], {
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
