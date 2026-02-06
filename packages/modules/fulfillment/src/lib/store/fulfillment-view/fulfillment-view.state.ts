import { Fulfillment } from '../../models';

export interface FulfillmentViewState {
  fulfillmentId: string | null;

  fulfillment: Fulfillment | null;

  loading: boolean;
  error: string | null;
}

export interface RelatedResourceState<T> {
  loading: boolean;
  error?: unknown;
  items: T[];
}

// const emptyRelated = {
//   loading: false,
//   items: [],
// };

export const initialFulfillmentViewState: FulfillmentViewState = {
  fulfillmentId: null,
  fulfillment: null,
  loading: false,
  error: null,
  // fulfilments: emptyRelated,
  // invoices: emptyRelated,
};
