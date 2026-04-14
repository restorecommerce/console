export type InvoiceStatus = {
  payment: 'paid' | 'unpaid';
  delivery: 'sent' | 'unsent';
  validity: 'active' | 'withdrawn';
  document: 'rendered' | 'not_rendered';
};
