import { IoRestorecommerceAmountAmount } from '@console-core/graphql';

import { OrderTotals } from './order-total.model';

export function mapTotals(
  total: IoRestorecommerceAmountAmount | undefined | null
): OrderTotals {
  if (!total) {
    return {
      subtotal: {
        amount: 0,
        currency: 'EUR',
      },
      grandTotal: {
        amount: 0,
        currency: 'EUR',
      },
    };
  }

  return {
    subtotal: {
      amount: total.net || 0,
      currency: 'EUR',
    },
    shipping: {
      amount: total.net || 0,
      currency: 'EUR',
    },
    tax: {
      amount: total.vats?.[0].vat || 0,
      currency: 'EUR',
    },
    grandTotal: {
      amount: total.gross || 0,
      currency: 'EUR',
    },
  };
}
