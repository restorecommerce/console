import { RoleListItem } from '../../models';

export interface RoleListState {
  items: RoleListItem[];
  loading: boolean;
  error?: string;
}

export const initialRoleListState: RoleListState = {
  items: [],
  loading: false,
};
