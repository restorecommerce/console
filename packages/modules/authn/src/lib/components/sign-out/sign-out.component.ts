import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthnFacade } from '../../+state/authn';

@Component({
  selector: 'app-authn-sign-out',
  template: ` <rc-page-sign-out></rc-page-sign-out> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignOutComponent implements OnInit {
  constructor(private readonly authnFacade: AuthnFacade) {}

  ngOnInit(): void {
    this.authnFacade.signOut();
  }
}
