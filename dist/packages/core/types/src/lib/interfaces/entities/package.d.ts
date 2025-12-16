import { IoRestorecommerceProductPackage } from '@console-core/graphql';
export interface IProductPackage extends Omit<IoRestorecommerceProductPackage, 'weightInKg' | 'sizeInCm' | 'rotatable'> {
    rotatable: boolean;
    weightInKg: number;
    sizeInCm: {
        height: number;
        length: number;
        width: number;
    };
}
