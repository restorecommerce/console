import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NotifierService } from '@vcl/ng-vcl';

import { AppFacade } from '@console-core/store-app';

import { Notifier } from '../../utils';

@Component({
  selector: 'app-module-main-private-template',
  template: `
    <ng-container *ngIf="notifications$ | async">
      <rc-private-template>
        <router-outlet></router-outlet>
      </rc-private-template>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateTemplateComponent extends Notifier {
  readonly notifications$ = this.appFacade.notifications$;

  constructor(
    notifier: NotifierService,
    private readonly appFacade: AppFacade
  ) {
    super(notifier);
    this.handleNotifications(this.notifications$);
  }
}
