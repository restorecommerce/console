import { Money } from './money';

export interface OrderItem {
  id: string;
  productName: string;
  sku?: string;
  quantity: number;
  unitPrice: Money;
  totalPrice: Money;
}
