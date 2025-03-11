import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SubSink } from 'subsink';

import { NotifierService } from '@vcl/ng-vcl';

import { AppFacade, AuthnFacade } from '@console-core/state';

import { Notifier } from '../../utils';

@Component({
  selector: 'app-module-main-private-template',
  template: `
    <rc-private-template>
      <router-outlet />
    </rc-private-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PrivateTemplateComponent
  extends Notifier
  implements OnInit, OnDestroy
{
  readonly notifications$ = this.appFacade.notifications$;

  private readonly subscriptions = new SubSink();

  constructor(
    private readonly notifier: NotifierService,
    private readonly appFacade: AppFacade,
    private readonly authFacade: AuthnFacade
  ) {
    super(notifier);
    this.handleNotifications(this.notifications$);
  }

  ngOnInit(): void {
    this.subscriptions.add(this.notifications$.subscribe());
    // TODO Move this to the Api handling services...
    this.subscriptions.add(
      this.authFacade.expiresIn$.subscribe((expiresIn) => {
        const expires = new Date(expiresIn as string);
        const now = new Date();

        if (now.getTime() > expires.getTime()) {
          this.authFacade.signOut();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
