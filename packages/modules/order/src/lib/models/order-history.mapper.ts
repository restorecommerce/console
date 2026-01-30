import { IoRestorecommerceOrderEvent } from '@console-core/graphql';

import { OrderHistoryEntry } from './order-history.model';

export function mapHistory(
  entries?: IoRestorecommerceOrderEvent[] | null
): OrderHistoryEntry[] {
  if (!entries?.length) {
    return [];
  }

  return entries.map((h) => ({
    code: h.code ?? 0,
    message: h.message ?? '',
    // timestamp: h.timestamp ?? '',
  }));
}
