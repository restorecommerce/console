import { INotification } from '../interfaces';

export type TNewNotification = Omit<INotification, 'title' | 'date'>;
