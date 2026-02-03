import { IoRestorecommerceOrderOrderState } from '@console-core/graphql';

import { OrderTimelineIcon } from './status-icon.model';

export function mapStatusToIcon(
  status: IoRestorecommerceOrderOrderState
): OrderTimelineIcon {
  switch (status) {
    case IoRestorecommerceOrderOrderState.Pending:
      return 'mdi mdi-clock-outline';

    case IoRestorecommerceOrderOrderState.Submitted:
      return 'mdi mdi-check-circle-outline';

    case IoRestorecommerceOrderOrderState.Completed:
      return 'mdi mdi-check-circle';

    case IoRestorecommerceOrderOrderState.Cancelled:
      return 'mdi mdi-close-circle-outline';

    case IoRestorecommerceOrderOrderState.Withdrawn:
      return 'mdi mdi-archive-outline';

    case IoRestorecommerceOrderOrderState.Invalid:
      return 'mdi mdi-alert-circle-outline';

    default:
      return 'mdi mdi-clock-outline';
  }
}
