import { Injectable, inject } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { MODULES_AUTHN_CONFIG, ModulesAuthnConfig } from './authn.tokens';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanMatch {
  private readonly config = inject<ModulesAuthnConfig>(MODULES_AUTHN_CONFIG);
  private readonly router = inject(Router);

  canMatch(_: Route, __: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.config.isAuthenticated$.pipe(
      take(1),
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          // user is NOT logged in: allow access to /auth, /auth/password-recovery, etc.
          return true;
        }

        // user is logged in: redirect them away from public routes
        const target = this.config.redirectAuthenticatedTo ?? ['/'];
        return Array.isArray(target)
          ? this.router.createUrlTree(target)
          : this.router.parseUrl(target);
      })
    );
  }
}
