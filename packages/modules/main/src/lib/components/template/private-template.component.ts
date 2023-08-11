import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { tap } from 'rxjs';
import { SubSink } from 'subsink';

import { NotifierService } from '@vcl/ng-vcl';

import { AccountFacade, AppFacade, AuthnFacade } from '@console-core/state';

import { Notifier } from '../../utils';

@Component({
  selector: 'app-module-main-private-template',
  template: `
    <rc-private-template>
      <router-outlet />
    </rc-private-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    private readonly accountFacade: AccountFacade,
    private readonly AuthnFacade: AuthnFacade
  ) {
    super(notifier);
    this.handleNotifications(this.notifications$);
  }

  ngOnInit(): void {
    this.subscriptions.sink = this.AuthnFacade.token$
      .pipe(
        tap((token) =>
          this.accountFacade.findUserByTokenRequest({
            token: token as string,
          })
        )
      )
      .subscribe();
    this.subscriptions.sink = this.notifications$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
