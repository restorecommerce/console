import { TRouterLink } from '../types';

export interface ICrudLinks {
  index: () => TRouterLink;
  create: () => TRouterLink;
  edit: (id: string | null) => TRouterLink;
  view: (id: string | null) => TRouterLink;
  'change-password'?: (id: string | null) => TRouterLink;
  'role-associations'?: (id: string | null) => TRouterLink;
}

export interface ICrudFeature {
  name: {
    plural: string;
    singular: string;
  };
  links: ICrudLinks;
  icon?: string;
  iconClass?: string;
}
