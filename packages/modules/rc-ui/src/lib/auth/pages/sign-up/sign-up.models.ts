export type RcSignUpAction =
  | {
      type: 'submit';
      payload: {
        firstName: string;
        lastName: string;
        email: string;
        username: string;
        password: string;
      };
    }
  | { type: 'password-mismatch' }
  | { type: 'cancel' };

// Reactive state for the sign-up workflow
export interface RcSignUpState {
  loading: boolean;
  success?: boolean;
  error?: string;

  // Optional: field-level errors
  fieldErrors?: Partial<{
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }>;
}
