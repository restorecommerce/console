import { IDateConstant } from '@console-core/types';

export const DATE: Readonly<IDateConstant> = {
  format: {
    date: 'dd/MM/yyyy',
    date_time: 'dd/MM/yyyy HH:mm',
    date_time_seconds: 'dd/MM/yyyy HH:mm:ss',
    time: 'HH:mm',
    time_seconds: 'HH:mm:ss',
  },
};
