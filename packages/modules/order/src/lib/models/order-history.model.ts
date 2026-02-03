import { EOrderStatus } from '@console-core/types';

import { OrderTimelineIcon } from './status-icon.model';

export interface OrderHistoryTimelineItem {
  title: string;
  description?: string;
  date: Date;
  status: EOrderStatus;
  icon?: OrderTimelineIcon;
}
