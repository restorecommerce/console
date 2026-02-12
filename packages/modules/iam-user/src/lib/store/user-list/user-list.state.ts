import { UserListItem } from '../../models';

export interface UserListState {
  items: UserListItem[];
  loading: boolean;
  error?: string;
}

export const initialUserListState: UserListState = {
  items: [],
  loading: false,
};
