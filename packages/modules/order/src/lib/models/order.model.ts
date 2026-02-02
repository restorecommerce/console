import { OrderCustomer } from './order-customer.model';
import { OrderDestination } from './order-destination.model';
import { OrderHistoryEntry } from './order-history.model';
import { OrderItem } from './order-item.model';
import { OrderMeta } from './order-meta.model';
import { EOrderStatus } from './order-status.enum';
import { OrderTotals } from './order-total.model';
// import { OrderTotals } from './order-total.model';
import { OrderUser } from './order-user.model';

export interface Order {
  id: string;
  status: EOrderStatus;
  shopId: string;
  notificationEmail?: string;
  meta: OrderMeta;
  customer?: OrderCustomer;
  user?: OrderUser;
  items: OrderItem[];
  totals: OrderTotals;
  history: OrderHistoryEntry[];

  destination?: OrderDestination;

  fulfilments?: {
    id: string;
  }[];
  invoices?: {
    id: string;
  }[];
}
