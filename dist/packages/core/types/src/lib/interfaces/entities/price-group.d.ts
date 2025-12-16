import { IoRestorecommercePriceGroupPriceGroup } from '@console-core/graphql';
import { IMeta } from './meta';
export interface IPriceGroup extends Omit<IoRestorecommercePriceGroupPriceGroup, 'id' | 'name' | 'shopId' | 'description' | 'meta' | '__typename'> {
    id: string;
    name: string;
    description: string;
    meta: IMeta;
}
