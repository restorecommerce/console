import { IoRestorecommerceCustomerCustomer } from '@console-core/graphql';
import { IMeta } from './meta';
export interface ICustomer extends Omit<IoRestorecommerceCustomerCustomer, 'id' | 'name' | 'description' | '__typename'> {
    id: string;
    name: string;
    description: string;
    meta: IMeta;
}
