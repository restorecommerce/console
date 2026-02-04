import { FulfillmentListItem } from '../../models';

export interface FulfillmentListState {
  items: FulfillmentListItem[];
  loading: boolean;
  error?: string;
}

export const initialFulfillmentListState: FulfillmentListState = {
  items: [],
  loading: false,
};
