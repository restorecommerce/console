import { IIoRestorecommerceFulfillmentFulfillment } from '@console-core/graphql';
import { IFulfillment } from '@console-core/types';

export const fulfilmentToInputDTO = (
  fulfillment: IFulfillment
): IIoRestorecommerceFulfillmentFulfillment => {
  return {
    id: fulfillment.id,
    userId: fulfillment.userId,
    fulfillmentState: fulfillment.fulfillmentState,
    shopId: fulfillment.shopId,
    customerId: fulfillment.customerId,
  };
};
