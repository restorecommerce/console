import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ROUTER } from '@console-core/config';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated here (e.g., using a service or authentication state)
    // TODO: Add authentication logic here
    const isAuthenticated = true;

    if (isAuthenticated) {
      // User is not authenticated, redirect to login or unauthorized page
      this.router.navigate([ROUTER.pages.private.children.home.link]);
      return false;
    }

    // User is authenticated, allow access
    return true;
  }
}
