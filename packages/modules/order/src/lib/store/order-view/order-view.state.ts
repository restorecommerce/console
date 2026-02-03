import { Fulfilment, Invoice, Order } from '../../models';

export interface OrderViewState {
  orderId: string | null;

  order: Order | null;

  loading: boolean;
  error: string | null;

  fulfilments: RelatedResourceState<Fulfilment>;
  invoices: RelatedResourceState<Invoice>;
}

export interface RelatedResourceState<T> {
  loading: boolean;
  error?: unknown;
  items: T[];
}

const emptyRelated = {
  loading: false,
  items: [],
};

export const initialOrderViewState: OrderViewState = {
  orderId: null,
  order: null,
  loading: false,
  error: null,
  fulfilments: emptyRelated,
  invoices: emptyRelated,
};
