import { IoRestorecommercePolicyPolicy } from '@console-core/graphql';
import { IMeta } from './meta';
export interface IPolicy extends Omit<IoRestorecommercePolicyPolicy, 'id' | 'name' | 'description' | 'meta' | '__typename'> {
    id: string;
    name: string;
    description: string;
    meta: IMeta;
}
