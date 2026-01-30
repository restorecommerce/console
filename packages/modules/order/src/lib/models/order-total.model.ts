import { Money } from './money';

export interface OrderTotals {
  subtotal: Money;
  tax?: Money;
  shipping?: Money;
  grandTotal: Money;
}
