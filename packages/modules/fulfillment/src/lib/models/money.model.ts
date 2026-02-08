export interface Money {
  gross: number; // minor units or decimal (be consistent)
  net: number;
  currency: string; // ISO code
  tax: number;
}
