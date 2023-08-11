import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SubSink } from 'subsink';

import { NotifierService } from '@vcl/ng-vcl';

import { AppFacade } from '@console-core/state';

import { Notifier } from '../../utils';

@Component({
  selector: 'app-module-main-public-template',
  template: `
    <rc-public-template>
      <router-outlet />
    </rc-public-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicTemplateComponent
  extends Notifier
  implements OnInit, OnDestroy
{
  readonly notifications$ = this.appFacade.notifications$;

  private readonly subscriptions = new SubSink();

  constructor(
    notifier: NotifierService,
    private readonly appFacade: AppFacade
  ) {
    super(notifier);
    this.handleNotifications(this.notifications$);
  }

  ngOnInit(): void {
    this.subscriptions.sink = this.notifications$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
