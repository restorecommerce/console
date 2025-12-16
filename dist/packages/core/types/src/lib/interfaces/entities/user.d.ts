import { IoRestorecommerceAuthRoleAssociation, IoRestorecommerceUserUser, IoRestorecommerceUserUserRole } from '@console-core/graphql';
import { IAttribute } from './attribute';
import { IMeta } from './meta';
import { IAuthToken } from './token';
export interface IUser extends Omit<IoRestorecommerceUserUser, 'id' | 'email' | 'name' | 'firstName' | 'lastName' | 'lastAccess' | 'roleAssociations' | 'meta' | '__typename'>, Omit<IoRestorecommerceUserUserRole, 'id' | 'email' | 'name' | 'firstName' | 'lastName' | 'roleAssociations' | 'meta' | '__typename'> {
    id: string;
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    fullName: string;
    tokens: IAuthToken[];
    lastAccess: string;
    roleAssociations: IRoleAssociation[];
    meta: IMeta;
}
export interface IRoleAssociation extends Omit<IoRestorecommerceAuthRoleAssociation, 'id' | 'role' | 'attributes' | '__typename'> {
    id?: string;
    role: string;
    attributes: IAttribute[];
}
