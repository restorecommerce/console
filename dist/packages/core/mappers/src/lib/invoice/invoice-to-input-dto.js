"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceToInputDTO = void 0;
const invoiceSectionInput = (invoice) => {
    if (!invoice.sections)
        return [];
    return invoice.sections.map((sec) => {
        var _a, _b;
        return {
            id: sec.id,
            amounts: (_a = sec.amounts) === null || _a === void 0 ? void 0 : _a.map((amount) => {
                var _a;
                return {
                    currencyId: amount.currencyId,
                    gross: amount.gross,
                    net: amount.net,
                    vats: (_a = amount.vats) === null || _a === void 0 ? void 0 : _a.map((vat) => {
                        return {
                            taxId: vat.taxId,
                            vat: vat.vat,
                        };
                    }),
                };
            }),
            customerRemark: sec.customerRemark,
            positions: (_b = sec.positions) === null || _b === void 0 ? void 0 : _b.map((position) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                return {
                    id: position.id,
                    amount: {
                        currencyId: (_a = position.amount) === null || _a === void 0 ? void 0 : _a.currencyId,
                        gross: (_b = position.amount) === null || _b === void 0 ? void 0 : _b.gross,
                        net: (_c = position.amount) === null || _c === void 0 ? void 0 : _c.net,
                        vats: (_d = position.amount) === null || _d === void 0 ? void 0 : _d.vats,
                    },
                    productItem: {
                        productId: (_e = position.productItem) === null || _e === void 0 ? void 0 : _e.productId,
                        variantId: (_f = position.productItem) === null || _f === void 0 ? void 0 : _f.variantId,
                    },
                    fromDate: position.fromDate,
                    toDate: position.toDate,
                    quantity: position.quantity,
                    unitPrice: {
                        currencyId: (_g = position.unitPrice) === null || _g === void 0 ? void 0 : _g.currencyId,
                        regularPrice: (_h = position.unitPrice) === null || _h === void 0 ? void 0 : _h.regularPrice,
                        sale: (_j = position.unitPrice) === null || _j === void 0 ? void 0 : _j.sale,
                        salePrice: (_k = position.unitPrice) === null || _k === void 0 ? void 0 : _k.salePrice,
                    },
                    attributes: position.attributes,
                };
            }),
        };
    });
};
const invoiceToInputDTO = (invoice) => {
    return {
        id: invoice.id,
        customerId: invoice.customerId,
        shopId: invoice.shopId,
        userId: invoice.userId,
        withdrawn: invoice.withdrawn,
        customerOrderNumber: invoice.customerOrderNumber,
        customerVatId: invoice.customerVatId,
        fromDate: invoice.fromDate,
        toDate: invoice.toDate,
        invoiceNumber: invoice.invoiceNumber,
        sent: invoice.sent,
        paymentHints: invoice.paymentHints,
        paymentState: invoice.paymentState,
        timestamp: invoice.timestamp,
        references: invoice.references,
        documents: invoice.documents,
        sections: invoiceSectionInput(invoice),
        totalAmounts: invoice.totalAmounts,
        sender: invoice.sender,
        billingAddress: invoice.billingAddress,
        recipient: invoice.recipient,
        meta: invoice.meta,
    };
};
exports.invoiceToInputDTO = invoiceToInputDTO;
//# sourceMappingURL=invoice-to-input-dto.js.map