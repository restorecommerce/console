import {
  IIoRestorecommerceAmountAmount,
  IIoRestorecommerceAmountVat,
  IIoRestorecommerceFileFile,
  IIoRestorecommerceFulfillmentCharge,
  IIoRestorecommerceFulfillmentFulfillment,
  IIoRestorecommerceFulfillmentItem,
  IIoRestorecommerceFulfillmentLabel,
  IIoRestorecommerceFulfillmentParcel,
  IIoRestorecommerceFulfillmentTracking,
} from '@console-core/graphql';
import { IFulfillment } from '@console-core/types';

export const fulfilmentToInputDTO = (
  fulfillment: IFulfillment
): IIoRestorecommerceFulfillmentFulfillment => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    id: fulfillment.id!,
    shopId: fulfillment.shopId,
    customerId: fulfillment.customerId,
    fulfillmentState: fulfillment.fulfillmentState,
    references: fulfillment.references,
    labels: fulfillment.labels?.map(
      (label): IIoRestorecommerceFulfillmentLabel => {
        return {
          id: label.id,
          parcelId: label.parcelId,
          shipmentNumber: label.shipmentNumber,
          state: label.state,
          status: label.status,
          file: label.file,
        };
      }
    ),
    trackings: fulfillment.trackings?.map(
      (flmnt): IIoRestorecommerceFulfillmentTracking => {
        return {
          events: flmnt.events?.map((event) => {
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
      }
    ),
    userId: fulfillment.userId,
    totalAmounts: fulfillment.totalAmounts?.map(
      (flmnt): IIoRestorecommerceAmountAmount => {
        return {
          net: flmnt.net,
          gross: flmnt.gross,
          currencyId: flmnt.currencyId,
          vats: flmnt.vats?.map((vat): IIoRestorecommerceAmountVat => {
            return {
              taxId: vat.taxId,
              vat: vat.vat,
            };
          }),
        };
      }
    ),
    documents: fulfillment.documents?.map((doc): IIoRestorecommerceFileFile => {
      return {
        id: doc.id,
        base64: doc.base64,
        url: doc.url,
        thumbnail: {
          id: doc?.thumbnail?.id,
          base64: doc?.thumbnail?.base64,
          url: doc?.thumbnail?.base64,
          caption: doc?.thumbnail?.caption,
        },
      };
    }),
    packaging: {
      customsDeclaration: {
        invoiceNumber: fulfillment.packaging?.customsDeclaration?.invoiceNumber,
        exportType: fulfillment.packaging?.customsDeclaration?.exportType,
        exportDescription:
          fulfillment.packaging?.customsDeclaration?.exportDescription,
        shipperRef: fulfillment.packaging?.customsDeclaration?.shipperRef,
        shippingCondition:
          fulfillment.packaging?.customsDeclaration?.shippingCondition,
        permitNumber: fulfillment.packaging?.customsDeclaration?.permitNumber,
        consigneeRef: fulfillment.packaging?.customsDeclaration?.consigneeRef,
        attestation: fulfillment.packaging?.customsDeclaration?.attestation,
        MRN: fulfillment.packaging?.customsDeclaration?.MRN,
        notify: fulfillment.packaging?.customsDeclaration?.notify,
        charges: fulfillment.packaging?.customsDeclaration?.charges?.map(
          (charge): IIoRestorecommerceFulfillmentCharge => {
            return {
              charge: {
                net: charge.charge?.net,
                gross: charge.charge?.gross,
                currencyId: charge.charge?.currencyId,
                vats: charge.charge?.vats?.map(
                  (vat): IIoRestorecommerceAmountVat => {
                    return {
                      vat: vat.vat,
                      taxId: vat.taxId,
                    };
                  }
                ),
              },
              description: '',
            };
          }
        ),
      },
      notify: fulfillment.packaging?.notify,
      parcels: fulfillment.packaging?.parcels?.map(
        (pcl): IIoRestorecommerceFulfillmentParcel => {
          return {
            id: pcl.id,
            productId: pcl.productId,
            variantId: pcl.variantId,
            price: {
              sale: pcl.price?.sale,
              regularPrice: pcl.price?.regularPrice,
              currencyId: pcl.price?.currencyId,
              salePrice: pcl.price?.salePrice,
            },
            package: {
              rotatable: pcl.package?.rotatable,
              weightInKg: pcl.package?.weightInKg,
              sizeInCm: {
                height: pcl.package?.sizeInCm?.height,
                length: pcl.package?.sizeInCm?.length,
                width: pcl.package?.sizeInCm?.width,
              },
            },
            amount: {
              gross: pcl.amount?.gross,
              net: pcl.amount?.net,
              currencyId: pcl.amount?.currencyId,
              vats: pcl.amount?.vats?.map(
                (vat): IIoRestorecommerceAmountVat => {
                  return {
                    taxId: vat.taxId,
                    vat: vat.vat,
                  };
                }
              ),
            },
            items: pcl.items?.map((item): IIoRestorecommerceFulfillmentItem => {
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
                  net: item.value?.net,
                  gross: item.value?.gross,
                  currencyId: item.value?.currencyId,
                  vats: item.value?.vats?.map(
                    (vat): IIoRestorecommerceAmountVat => {
                      return {
                        taxId: vat.taxId,
                        vat: vat.vat,
                      };
                    }
                  ),
                },
                package: {
                  rotatable: item.package?.rotatable,
                  weightInKg: item.package?.weightInKg,
                  sizeInCm: {
                    height: item.package?.sizeInCm?.height,
                    length: item.package?.sizeInCm?.length,
                    width: item.package?.sizeInCm?.width,
                  },
                },
              };
            }),
          };
        }
      ),
    },
    meta: fulfillment.meta,
  };
};
