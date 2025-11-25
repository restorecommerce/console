// layout-header.tokens.ts
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { RsHeaderUser, RsHeaderOrganization } from './header-toolbar.models';

export type AccountAction = 'profile' | 'preferences' | 'sign-out';

export const LAYOUT_USER$ = new InjectionToken<Observable<RsHeaderUser | null>>(
  'LAYOUT_USER$'
);

export const LAYOUT_ORGS$ = new InjectionToken<
  Observable<RsHeaderOrganization[]>
>('LAYOUT_ORGS$');

export const LAYOUT_SELECTED_ORG_ID$ = new InjectionToken<
  Observable<string | null>
>('LAYOUT_SELECTED_ORG_ID$');

/**
 * Handler for account actions: shell calls this, host decides what to do.
 * (navigate with ROUTER, dispatch logout, etc.)
 */
export const LAYOUT_ACCOUNT_ACTION_HANDLER = new InjectionToken<
  (action: AccountAction) => void
>('LAYOUT_ACCOUNT_ACTION_HANDLER');

/**
 * Setter for selected org – shell calls this when user picks an org.
 */
export const LAYOUT_SET_SELECTED_ORG = new InjectionToken<
  (orgId: string) => void
>('LAYOUT_SET_SELECTED_ORG');
