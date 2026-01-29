import { IOrderListItem } from '../../models';

import { mockOrderListItem } from './order-list.mock';

export interface OrderListState {
  items: IOrderListItem[];
  loading: boolean;
  error?: string;
}

export const initialOrderListState: OrderListState = {
  items: [mockOrderListItem],
  loading: false,
};
