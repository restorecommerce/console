import { IIoRestorecommerceFulfillmentFulfillment } from '@console-core/graphql';
import { IFulfillment } from '@console-core/types';

export const fulfilmentToInputDTO = (
  fulfillemnt: IFulfillment
): IIoRestorecommerceFulfillmentFulfillment => {
  return {
    id: fulfillemnt.id,
    userId: fulfillemnt.userId,
    fulfillmentState: fulfillemnt.fulfillmentState,
    shopId: fulfillemnt.shopId,
    customerId: fulfillemnt.customerId,
  };
};
