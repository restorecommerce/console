import { IoRestorecommerceManufacturerManufacturer } from '@console-core/graphql';
import { IMeta } from './meta';
export interface IManufacturer extends Omit<IoRestorecommerceManufacturerManufacturer, 'id' | 'name' | 'shopId' | 'description' | 'meta' | '__typename'> {
    id: string;
    name: string;
    description: string;
    meta: IMeta;
}
