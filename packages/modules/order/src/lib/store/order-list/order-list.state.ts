import { IOrderListItem } from '../../models';

export interface OrderListState {
  items: IOrderListItem[];
  loading: boolean;
  error?: string;
}

export const initialOrderListState: OrderListState = {
  items: [],
  loading: false,
};
