import { Observable } from 'rxjs';

import { NotifierService, NotifierPosition } from '@vcl/ng-vcl';

import { INotification } from '@console-core/types';

export class Notifier {
  constructor(private readonly notifierService: NotifierService) {}

  handleNotifications(notifications$: Observable<INotification[]>): void {
    notifications$.subscribe((notifications) => {
      notifications.forEach((notification) => {
        this.notifierService[notification.type]({
          content: notification.content,
          position: NotifierPosition.TopRight,
        });
      });
    });
  }
}
