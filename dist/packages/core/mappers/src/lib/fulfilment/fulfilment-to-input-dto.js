"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fulfilmentToInputDTO = void 0;
const fulfilmentToInputDTO = (fulfillment) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    return {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id: fulfillment.id,
        shopId: fulfillment.shopId,
        customerId: fulfillment.customerId,
        fulfillmentState: fulfillment.fulfillmentState,
        references: fulfillment.references,
        labels: (_a = fulfillment.labels) === null || _a === void 0 ? void 0 : _a.map((label) => {
            return {
                id: label.id,
                parcelId: label.parcelId,
                shipmentNumber: label.shipmentNumber,
                state: label.state,
                status: label.status,
                file: label.file,
            };
        }),
        trackings: (_b = fulfillment.trackings) === null || _b === void 0 ? void 0 : _b.map((flmnt) => {
            var _a;
            return {
                events: (_a = flmnt.events) === null || _a === void 0 ? void 0 : _a.map((event) => {
                    return {
                        location: event.location,
                        timestamp: event.timestamp,
                        status: event.status,
                        details: event.details,
                    };
                }),
                shipmentNumber: flmnt.shipmentNumber,
                status: flmnt.status,
                details: flmnt.details,
            };
        }),
        userId: fulfillment.userId,
        totalAmounts: (_c = fulfillment.totalAmounts) === null || _c === void 0 ? void 0 : _c.map((flmnt) => {
            var _a;
            return {
                net: flmnt.net,
                gross: flmnt.gross,
                currencyId: flmnt.currencyId,
                vats: (_a = flmnt.vats) === null || _a === void 0 ? void 0 : _a.map((vat) => {
                    return {
                        taxId: vat.taxId,
                        vat: vat.vat,
                    };
                }),
            };
        }),
        documents: (_d = fulfillment.documents) === null || _d === void 0 ? void 0 : _d.map((doc) => {
            var _a, _b, _c, _d;
            return {
                id: doc.id,
                base64: doc.base64,
                url: doc.url,
                thumbnail: {
                    id: (_a = doc === null || doc === void 0 ? void 0 : doc.thumbnail) === null || _a === void 0 ? void 0 : _a.id,
                    base64: (_b = doc === null || doc === void 0 ? void 0 : doc.thumbnail) === null || _b === void 0 ? void 0 : _b.base64,
                    url: (_c = doc === null || doc === void 0 ? void 0 : doc.thumbnail) === null || _c === void 0 ? void 0 : _c.base64,
                    caption: (_d = doc === null || doc === void 0 ? void 0 : doc.thumbnail) === null || _d === void 0 ? void 0 : _d.caption,
                },
            };
        }),
        packaging: {
            customsDeclaration: {
                invoiceNumber: (_f = (_e = fulfillment.packaging) === null || _e === void 0 ? void 0 : _e.customsDeclaration) === null || _f === void 0 ? void 0 : _f.invoiceNumber,
                exportType: (_h = (_g = fulfillment.packaging) === null || _g === void 0 ? void 0 : _g.customsDeclaration) === null || _h === void 0 ? void 0 : _h.exportType,
                exportDescription: (_k = (_j = fulfillment.packaging) === null || _j === void 0 ? void 0 : _j.customsDeclaration) === null || _k === void 0 ? void 0 : _k.exportDescription,
                shipperRef: (_m = (_l = fulfillment.packaging) === null || _l === void 0 ? void 0 : _l.customsDeclaration) === null || _m === void 0 ? void 0 : _m.shipperRef,
                shippingCondition: (_p = (_o = fulfillment.packaging) === null || _o === void 0 ? void 0 : _o.customsDeclaration) === null || _p === void 0 ? void 0 : _p.shippingCondition,
                permitNumber: (_r = (_q = fulfillment.packaging) === null || _q === void 0 ? void 0 : _q.customsDeclaration) === null || _r === void 0 ? void 0 : _r.permitNumber,
                consigneeRef: (_t = (_s = fulfillment.packaging) === null || _s === void 0 ? void 0 : _s.customsDeclaration) === null || _t === void 0 ? void 0 : _t.consigneeRef,
                attestation: (_v = (_u = fulfillment.packaging) === null || _u === void 0 ? void 0 : _u.customsDeclaration) === null || _v === void 0 ? void 0 : _v.attestation,
                MRN: (_x = (_w = fulfillment.packaging) === null || _w === void 0 ? void 0 : _w.customsDeclaration) === null || _x === void 0 ? void 0 : _x.MRN,
                notify: (_z = (_y = fulfillment.packaging) === null || _y === void 0 ? void 0 : _y.customsDeclaration) === null || _z === void 0 ? void 0 : _z.notify,
                charges: (_2 = (_1 = (_0 = fulfillment.packaging) === null || _0 === void 0 ? void 0 : _0.customsDeclaration) === null || _1 === void 0 ? void 0 : _1.charges) === null || _2 === void 0 ? void 0 : _2.map((charge) => {
                    var _a, _b, _c, _d, _e;
                    return {
                        charge: {
                            net: (_a = charge.charge) === null || _a === void 0 ? void 0 : _a.net,
                            gross: (_b = charge.charge) === null || _b === void 0 ? void 0 : _b.gross,
                            currencyId: (_c = charge.charge) === null || _c === void 0 ? void 0 : _c.currencyId,
                            vats: (_e = (_d = charge.charge) === null || _d === void 0 ? void 0 : _d.vats) === null || _e === void 0 ? void 0 : _e.map((vat) => {
                                return {
                                    vat: vat.vat,
                                    taxId: vat.taxId,
                                };
                            }),
                        },
                        description: '',
                    };
                }),
            },
            notify: (_3 = fulfillment.packaging) === null || _3 === void 0 ? void 0 : _3.notify,
            parcels: (_5 = (_4 = fulfillment.packaging) === null || _4 === void 0 ? void 0 : _4.parcels) === null || _5 === void 0 ? void 0 : _5.map((pcl) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
                return {
                    id: pcl.id,
                    productId: pcl.productId,
                    variantId: pcl.variantId,
                    price: {
                        sale: (_a = pcl.price) === null || _a === void 0 ? void 0 : _a.sale,
                        regularPrice: (_b = pcl.price) === null || _b === void 0 ? void 0 : _b.regularPrice,
                        currencyId: (_c = pcl.price) === null || _c === void 0 ? void 0 : _c.currencyId,
                        salePrice: (_d = pcl.price) === null || _d === void 0 ? void 0 : _d.salePrice,
                    },
                    package: {
                        rotatable: (_e = pcl.package) === null || _e === void 0 ? void 0 : _e.rotatable,
                        weightInKg: (_f = pcl.package) === null || _f === void 0 ? void 0 : _f.weightInKg,
                        sizeInCm: {
                            height: (_h = (_g = pcl.package) === null || _g === void 0 ? void 0 : _g.sizeInCm) === null || _h === void 0 ? void 0 : _h.height,
                            length: (_k = (_j = pcl.package) === null || _j === void 0 ? void 0 : _j.sizeInCm) === null || _k === void 0 ? void 0 : _k.length,
                            width: (_m = (_l = pcl.package) === null || _l === void 0 ? void 0 : _l.sizeInCm) === null || _m === void 0 ? void 0 : _m.width,
                        },
                    },
                    amount: {
                        gross: (_o = pcl.amount) === null || _o === void 0 ? void 0 : _o.gross,
                        net: (_p = pcl.amount) === null || _p === void 0 ? void 0 : _p.net,
                        currencyId: (_q = pcl.amount) === null || _q === void 0 ? void 0 : _q.currencyId,
                        vats: (_s = (_r = pcl.amount) === null || _r === void 0 ? void 0 : _r.vats) === null || _s === void 0 ? void 0 : _s.map((vat) => {
                            return {
                                taxId: vat.taxId,
                                vat: vat.vat,
                            };
                        }),
                    },
                    items: (_t = pcl.items) === null || _t === void 0 ? void 0 : _t.map((item) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                        return {
                            productId: item.productId,
                            variantId: item.variantId,
                            quantity: item.quantity,
                            name: item.name,
                            description: item.description,
                            hsCode: item.hsCode,
                            originCountryId: item.originCountryId,
                            taricCode: item.taricCode,
                            value: {
                                net: (_a = item.value) === null || _a === void 0 ? void 0 : _a.net,
                                gross: (_b = item.value) === null || _b === void 0 ? void 0 : _b.gross,
                                currencyId: (_c = item.value) === null || _c === void 0 ? void 0 : _c.currencyId,
                                vats: (_e = (_d = item.value) === null || _d === void 0 ? void 0 : _d.vats) === null || _e === void 0 ? void 0 : _e.map((vat) => {
                                    return {
                                        taxId: vat.taxId,
                                        vat: vat.vat,
                                    };
                                }),
                            },
                            package: {
                                rotatable: (_f = item.package) === null || _f === void 0 ? void 0 : _f.rotatable,
                                weightInKg: (_g = item.package) === null || _g === void 0 ? void 0 : _g.weightInKg,
                                sizeInCm: {
                                    height: (_j = (_h = item.package) === null || _h === void 0 ? void 0 : _h.sizeInCm) === null || _j === void 0 ? void 0 : _j.height,
                                    length: (_l = (_k = item.package) === null || _k === void 0 ? void 0 : _k.sizeInCm) === null || _l === void 0 ? void 0 : _l.length,
                                    width: (_o = (_m = item.package) === null || _m === void 0 ? void 0 : _m.sizeInCm) === null || _o === void 0 ? void 0 : _o.width,
                                },
                            },
                        };
                    }),
                };
            }),
        },
        meta: fulfillment.meta,
    };
};
exports.fulfilmentToInputDTO = fulfilmentToInputDTO;
//# sourceMappingURL=fulfilment-to-input-dto.js.map