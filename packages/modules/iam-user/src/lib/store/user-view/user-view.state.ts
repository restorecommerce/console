import { UserDetail } from '../../models';

export interface IAMUserViewState {
  iamUserId: string | null;

  iamUser: UserDetail | null;

  loading: boolean;
  error: string | null;
}

export const initialIAMUserViewState: IAMUserViewState = {
  iamUserId: null,
  iamUser: null,
  loading: false,
  error: null,
};
