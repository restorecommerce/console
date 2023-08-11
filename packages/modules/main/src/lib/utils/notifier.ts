import { Observable } from 'rxjs';

import { NotifierService, NotifierPosition } from '@vcl/ng-vcl';

import { ENotificationTypes, INotification } from '@console-core/types';

export class Notifier {
  constructor(private readonly notifierService: NotifierService) {}

  handleNotifications(notifications$: Observable<INotification[]>): void {
    notifications$.subscribe((notifications) => {
      notifications
        .filter(({ type }) => Object.values(ENotificationTypes).includes(type))
        .forEach((notification) => {
          this.notifierService[notification.type]({
            content: notification.content,
            position: NotifierPosition.TopRight,
          });
        });
    });
  }
}
