import {AuthActions, SIGN_UP} from '@store/types/auth';

interface InitialState {
  token: string | null;
  userId: string | null;
}

const initialState: InitialState = {
  token: null,
  userId: null,
};

const AuthReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};

export default AuthReducer;