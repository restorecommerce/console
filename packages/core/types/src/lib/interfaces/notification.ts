import { ENotificationTypes } from '../enums';

export interface INotification {
  title: string;
  content: string;
  type: ENotificationTypes;
  date: Date;
}
