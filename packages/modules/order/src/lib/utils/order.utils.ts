import {
  IIoRestorecommerceOrderItem,
  IIoRestorecommerceOrderOrder,
  IoRestorecommerceAmountAmount,
  IoRestorecommerceOrderItem,
} from '@console-core/graphql';
import { IOrder } from '@console-core/types';

export const transformOrderToInput = (
  order: IOrder
): IIoRestorecommerceOrderOrder => {
  const inputItems: IIoRestorecommerceOrderItem[] = order.items
    ? order.items.map(
        (item: IoRestorecommerceOrderItem): IIoRestorecommerceOrderItem => {
          return {
            // id: item.id,
            productId: item.productId,
            variantId: item.variantId,
            parentItemId: item.parentItemId,
            quantity: item.quantity,
            unitPrice: {
              regularPrice: item.unitPrice?.regularPrice,
              sale: item.unitPrice?.sale,
              salePrice: item.unitPrice?.salePrice,
              currencyId: item.unitPrice?.currencyId,
            },
          };
        }
      )
    : [];

  const totalAmounts = order.totalAmounts
    ? order.totalAmounts.map((orderAmount): IoRestorecommerceAmountAmount => {
        return {
          gross: orderAmount.gross,
          net: orderAmount.net,
          currencyId: orderAmount.currencyId,
        };
      })
    : [];

  return {
    id: order.id,
    shopId: order.shopId,
    notificationEmail: order.notificationEmail,
    orderState: order.orderState,
    customerType: order.customerType,
    customerVatId: order.customerVatId,
    paymentMethodId: order.paymentMethodId,
    shippingAddress: {
      address: {
        // id: order.shippingAddress?.address?.id,
        locality: order.shippingAddress?.address?.locality,
        street: order.shippingAddress?.address?.street,
        region: order.shippingAddress?.address?.region,
        countryId: order.shippingAddress?.address?.countryId,
        buildingNumber: order.shippingAddress?.address?.buildingNumber,
        postcode: order.shippingAddress?.address?.postcode,
        // altitude: null,
        // addressAddition: {
        //   field1: '',
        //   field2: '',
        // },
        // businessAddress: {
        //   name: order.shippingAddress?.address?.businessAddress?.name,
        // },
        // residentialAddress: {
        //   title: null,
        //   givenName: null,
        //   midName: null,
        //   familyName: null,
        // },
        // geoCoordinates: {
        //   latitude: null,
        //   longitude: null,
        // },
        // packStation: {
        //   provider: null,
        //   stationNumber: null,
        //   postNumber: null,
        // },
      },
      contact: {
        name: null,
        email: null,
        phone: null,
      },
      // comments: null,
    },
    billingAddress: {
      address: {
        // id: order.billingAddress?.address?.id,
        postcode: order.billingAddress?.address?.postcode,
        countryId: order.billingAddress?.address?.countryId,
        locality: order.billingAddress?.address?.locality,
        street: order.billingAddress?.address?.street,
        region: order.billingAddress?.address?.region,
        // altitude: null,
        buildingNumber: order.billingAddress?.address?.buildingNumber,
        // geoCoordinates: {
        //   latitude: null,
        //   longitude: null,
        // },
        // addressAddition: {
        //   field1: '',
        //   field2: '',
        // },
        // businessAddress: {
        //   name: order.billingAddress?.address?.businessAddress?.name,
        // },
        // residentialAddress: {
        //   title: null,
        //   givenName: null,
        //   midName: null,
        //   familyName: null,
        // },
        // packStation: {
        //   provider: null,
        //   stationNumber: null,
        //   postNumber: null,
        // },
      },
      contact: {
        name: null,
        email: null,
        phone: null,
      },
      // comments: null,
    },
    totalAmounts: [...totalAmounts],
    items: [...inputItems],
  };
};
