export type CustomerType = 'PRIVATE' | 'COMMERCIAL' | 'PUBLIC_SECTOR';

export interface OrderCustomer {
  id: string;
  name: string;
  email?: string;
  type: CustomerType;
}

export const CUSTOMER_TYPE_LABEL: Record<CustomerType, string> = {
  PRIVATE: 'Private',
  COMMERCIAL: 'Commercial',
  PUBLIC_SECTOR: 'Public sector',
};
