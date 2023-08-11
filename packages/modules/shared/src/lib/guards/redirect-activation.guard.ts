import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

import { ROUTER } from '@console-core/config';
import { RouterFacade } from '@console-core/state';

@Injectable({
  providedIn: 'root',
})
export class RedirectActivationGuard implements CanActivate {
  constructor(private routerFacade: RouterFacade) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const identifier = route.queryParams['identifier'];
    const code = route.queryParams['activation_code'];
    const redirectUrl =
      identifier && code
        ? ROUTER.pages.main.children.auth.children.activation.getLink({
            identifier,
            code,
          })
        : ROUTER.pages.main.children.auth.children.signIn.getLink();

    this.routerFacade.navigate(redirectUrl);
    return false;
  }
}
