import {SIGN_UP} from '@store/types/auth';
import {URL_AUTH} from '@utils/data/database';

export const signUp = (email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetch(URL_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();
    console.log('data', data);

    dispatch({
      type: SIGN_UP,
      payload: {
        token: data.token,
        userId: data.localId,
      },
    });

    if (data.error) {
      throw new Error(data.error);
    }
  };
};
