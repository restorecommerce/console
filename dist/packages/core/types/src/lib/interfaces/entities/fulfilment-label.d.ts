import { IoRestorecommerceFulfillmentFulfillmentState, IoRestorecommerceFulfillmentLabel } from '@console-core/graphql';
import { IFile } from './file';
export interface IFulfilmentLabel extends Omit<IoRestorecommerceFulfillmentLabel, 'id' | 'parcelId' | 'shipmentNumber' | 'state' | '__typename'> {
    id: string;
    parcelId: string;
    shipmentNumber: string;
    state: IoRestorecommerceFulfillmentFulfillmentState;
    file: IFile;
}
