import { Money } from './money';
import { EOrderStatus } from './order-status.enum';

export interface IOrderListItem {
  id: string;
  displayNumber: string; // human-friendly (e.g. ORD-2026-00123)
  status: EOrderStatus;
  total: Money;
  createdAt: Date;
  customerName?: string;
}
