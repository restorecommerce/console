import { BehaviorSubject } from 'rxjs';

import { IoRestorecommerceResourcebaseSortSortOrder } from '@console-core/graphql';

import { TRouterLink } from '../types';

export interface ICrudSort {
  sorts: {
    field: string;
    order: IoRestorecommerceResourcebaseSortSortOrder;
  }[];
}

export interface ICrudLinks {
  index: () => TRouterLink;
  create: () => TRouterLink;
  edit: (id: string | null) => TRouterLink;
  view: (id: string | null) => TRouterLink;
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

export interface ICrudActionStreams {
  read: BehaviorSubject<void | null>;
  setSelectedId: BehaviorSubject<string | null>;
  delete: BehaviorSubject<string | null>;
}
