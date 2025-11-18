import { IoRestorecommerceAttributeAttribute } from '@console-core/graphql';

export interface IAttribute
  extends Omit<
    IoRestorecommerceAttributeAttribute,
    'id' | 'attributes' | '__typename'
  > {
  id: string;
  attributes?: IAttribute[];
}
