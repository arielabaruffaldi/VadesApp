export const SIGN_UP = 'SIGN_UP';

export interface SignUp {
  type: typeof SIGN_UP;
  payload: SignUpResponse;
}

interface SignUpResponse {
  token: string;
  userId: string;
}

export type AuthActions = SignUp;
