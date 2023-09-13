import { INotification } from '../interfaces';

export type TNewNotification = Pick<INotification, 'type' | 'content'>;
