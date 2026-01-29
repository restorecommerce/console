import { IOrderListItem } from '../../models';
import { Money } from '../../models/money';

export const mockOrderListItem: IOrderListItem = {
  id: 'order-001',

  displayNumber: 'ORD-2026-0001',

  status: 'CONFIRMED',

  total: new Money(125_00, 'EUR'),

  createdAt: new Date('2026-01-15T09:42:00Z'),

  customerName: 'Acme GmbH',
};
