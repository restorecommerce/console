export interface IamUserCreateState {
  loading: boolean;
  success: boolean;
  error: string | null;
  createdId: string | null;
}

export const initialIamUserCreateState: IamUserCreateState = {
  createdId: null,
  loading: false,
  success: false,
  error: null,
};
