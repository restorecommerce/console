export type IInvoicePosition = {
    id: string;
    kind: 'product' | 'manual';
    title: string;
    sku?: string;
    variant?: string;
    productId?: string;
    quantity: number;
    currency: string;
    unit: number;
    total: number;
    sale?: boolean;
    imageUrl?: string;
};
export type IInvoiceSection = {
    id: string;
    label: string;
    customerRemark?: string | null;
    positions: IInvoicePosition[];
    subtotal: {
        net?: number;
        gross?: number;
    };
};
export type IInvoiceSections = {
    currency: string;
    sections: IInvoiceSection[];
};
