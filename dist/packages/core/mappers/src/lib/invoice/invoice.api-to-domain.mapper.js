"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapInvoiceReadResponseToInvoice = mapInvoiceReadResponseToInvoice;
function splitReferenceIds(refs) {
    var _a, _b;
    const orderIds = [];
    const fulfillmentIds = [];
    if (!Array.isArray(refs))
        return { orderIds, fulfillmentIds };
    for (const r of refs) {
        const id = (_a = r === null || r === void 0 ? void 0 : r.instanceId) !== null && _a !== void 0 ? _a : '';
        const t = (_b = r === null || r === void 0 ? void 0 : r.instanceType) !== null && _b !== void 0 ? _b : '';
        if (!id)
            continue;
        if (t.endsWith(':order:Order')) {
            orderIds.push(id);
        }
        else if (t.endsWith(':fulfillment:Fulfillment')) {
            fulfillmentIds.push(id);
        }
    }
    return { orderIds, fulfillmentIds };
}
// export const mapInvoiceSections = () => {
//   const positions: IInvoicePosition[] = (sec.positions ?? []).map((p: any) => {
//     const isProduct = !!p.productItem;
//     const unit = Number(p.unitPrice?.salePrice ?? 0);
//     const qty = Number(p.quantity ?? 0);
//     return {
//       id: p.id,
//       kind: isProduct ? 'product' : 'manual',
//       title: isProduct ? p.productItem.productId : 'Manual line',
//       sku: isProduct ? p.productItem.product?.id : undefined,
//       variant: isProduct ? p.productItem.variantId : undefined,
//       productId: isProduct ? p.productItem.productId : undefined,
//       quantity: qty,
//       currency: p.unitPrice?.currencyId ?? firstCurrency,
//       unit,
//       total: +(qty * unit).toFixed(2),
//       sale: !!p.unitPrice?.sale,
//       // imageUrl resolved via your product->image pipe in template
//     };
//   });
//   const sectionSubtotal = positions.reduce((acc, r) => acc + (r.total || 0), 0);
//   return {
//     id: sec.id,
//     label: `Order • ${sec.id.slice(0, 8)}`,
//     customerRemark: sec.customerRemark,
//     positions,
//     subtotal: { gross: +sectionSubtotal.toFixed(2) }, // if you don’t track tax, show gross=unit*qty
//   };
// };
function mapInvoiceReadResponseToInvoice(items) {
    const invoices = [];
    items.forEach((item) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const { orderIds, fulfillmentIds } = splitReferenceIds(item.references);
        invoices.push({
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            id: item.id,
            customerId: (_a = item.customerId) !== null && _a !== void 0 ? _a : '',
            shopId: (_b = item.shopId) !== null && _b !== void 0 ? _b : '',
            userId: (_c = item.userId) !== null && _c !== void 0 ? _c : '',
            orderIds,
            fulfillmentIds,
            meta: item.meta,
            sections: (_d = item.sections) !== null && _d !== void 0 ? _d : [],
            fromDate: (_e = item.fromDate) !== null && _e !== void 0 ? _e : null,
            toDate: (_f = item.toDate) !== null && _f !== void 0 ? _f : null,
            withdrawn: (_g = item.withdrawn) !== null && _g !== void 0 ? _g : null,
            paymentHints: (_h = item.paymentHints) !== null && _h !== void 0 ? _h : null,
            customerOrderNumber: (_j = item.customerOrderNumber) !== null && _j !== void 0 ? _j : null,
            totalAmounts: (_k = item.totalAmounts) !== null && _k !== void 0 ? _k : null,
            documents: (_l = item.documents) !== null && _l !== void 0 ? _l : null,
            recipient: (_m = item.recipient) !== null && _m !== void 0 ? _m : null,
            billingAddress: (_o = item.billingAddress) !== null && _o !== void 0 ? _o : null,
            paymentState: (_p = item.paymentState) !== null && _p !== void 0 ? _p : null,
            sent: (_q = item.sent) !== null && _q !== void 0 ? _q : null,
            customerVatId: (_r = item.customerVatId) !== null && _r !== void 0 ? _r : null,
            sender: (_s = item.sender) !== null && _s !== void 0 ? _s : null,
            invoiceNumber: (_t = item.invoiceNumber) !== null && _t !== void 0 ? _t : null,
        });
    });
    return invoices;
}
//# sourceMappingURL=invoice.api-to-domain.mapper.js.map