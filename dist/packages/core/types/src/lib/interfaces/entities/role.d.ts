import { IoRestorecommerceRoleRole } from '@console-core/graphql';
import { IMeta } from './meta';
export interface IRole extends Omit<IoRestorecommerceRoleRole, 'id' | 'name' | 'description' | 'meta' | '__typename'> {
    id: string;
    name: string;
    description: string;
    assignableByRoles: string[];
    meta: IMeta;
}
