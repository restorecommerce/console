import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NotifierService } from '@vcl/ng-vcl';

import { AppFacade } from '@console-core/store-app';

import { Notifier } from '../../utils';

@Component({
  selector: 'app-module-main-public-template',
  template: `
    <ng-container *ngIf="notifications$ | async">
      <rc-public-template>
        <router-outlet />
      </rc-public-template>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicTemplateComponent extends Notifier {
  readonly notifications$ = this.appFacade.notifications$;

  constructor(
    notifier: NotifierService,
    private readonly appFacade: AppFacade
  ) {
    super(notifier);
    this.handleNotifications(this.notifications$);
  }
}
