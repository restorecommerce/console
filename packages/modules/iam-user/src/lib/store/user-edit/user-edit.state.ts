import { UserUpdateFormValue } from '../../models';

export interface IamUserEditState {
  user: UserUpdateFormValue | null;
  loading: boolean;
  saving: boolean;
  error: string | null;
}

export const initialState: IamUserEditState = {
  user: null,
  loading: false,
  saving: false,
  error: null,
};
