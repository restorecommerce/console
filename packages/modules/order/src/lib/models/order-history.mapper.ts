import { IoRestorecommerceOrderEvent } from '@console-core/graphql';

import { OrderHistoryTimelineItem } from './order-history.model';
import { EOrderStatus } from './order-status.enum';
import { mapStatusToIcon } from './status-icon.mapper';

export function mapHistoryToTimeline(
  entry: IoRestorecommerceOrderEvent
): OrderHistoryTimelineItem {
  return {
    title: entry.message ?? '',
    date: new Date((entry.timestamp as string) ?? new Date().toISOString()),
    status: entry.state ?? EOrderStatus.Pending,
    icon: mapStatusToIcon(entry.state ?? EOrderStatus.Pending),
  };
}
