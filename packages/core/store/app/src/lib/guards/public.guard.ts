import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ROUTER } from '@console-core/config';

import { AppFacade } from '../+state/app';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard {
  constructor(
    private readonly router: Router,
    private readonly appFacade: AppFacade
  ) {}

  canActivate(_: ActivatedRouteSnapshot): Observable<boolean> {
    return this.appFacade.isNotAuthenticated$.pipe(
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
