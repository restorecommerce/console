import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthnFacade } from '@console-core/state';

@Component({
  selector: 'app-authn-sign-out',
  template: ` <rc-page-authn-sign-out /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class SignOutComponent implements OnInit {
  constructor(private readonly authnFacade: AuthnFacade) {}

  ngOnInit(): void {
    this.authnFacade.signOut();
  }
}
