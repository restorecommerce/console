import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

import { MODULES_AUTHN_CONFIG, ModulesAuthnConfig } from './authn.tokens';

export const publicGuard: CanMatchFn = () => {
  const config = inject<ModulesAuthnConfig>(MODULES_AUTHN_CONFIG);
  const router = inject(Router);

  return config.isAuthenticated$.pipe(
    take(1),
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        // user is NOT logged in → allow /auth
        return true;
      }

      // user is logged in → redirect away from /auth
      const target = config.redirectAuthenticatedTo ?? '/';
      return Array.isArray(target)
        ? router.createUrlTree(target)
        : router.parseUrl(target);
    })
  );
};
