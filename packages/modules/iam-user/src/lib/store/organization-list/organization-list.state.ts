import { OrganizationListItem } from '../../models';

export interface OrganizationListState {
  items: OrganizationListItem[];
  loading: boolean;
  error?: string;
}

export const initialOrganizationListState: OrganizationListState = {
  items: [],
  loading: false,
};
