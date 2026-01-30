import { Order } from '../../models';

export interface OrderViewState {
  orderId: string | null;

  order: Order | null;

  loading: boolean;
  error: string | null;

  // UI-only state
  activeTab: number;
}

export const initialOrderViewState: OrderViewState = {
  orderId: null,
  order: null,
  loading: false,
  error: null,
  activeTab: 0,
};
