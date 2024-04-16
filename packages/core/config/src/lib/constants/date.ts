import { IDateConstant } from '@console-core/types';

export const DATE: Readonly<IDateConstant> = {
  format: {
    date: 'dd/MM/yyyy',
    dateTime: 'dd/MM/yyyy HH:mm',
    dateTimeSeconds: 'dd/MM/yyyy HH:mm:ss',
    time: 'HH:mm',
    timeSeconds: 'HH:mm:ss',
    dateTimeWithSeconds: 'MMM d, y, hh:mm:ss a',
  },
};
