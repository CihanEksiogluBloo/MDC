import { AuthAction } from "../actions/auth";

export type AuthinitialStateTypes = {
  app_token: null | string;
  userId: null | number;
  didTryAutoLogin: boolean;
  error: string | undefined;
};

const initialState = {
  app_token: null,
  userId: null,
  didTryAutoLogin: false,
  error: undefined,
};

export default (
  state: AuthinitialStateTypes = initialState,
  action: AuthAction
) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        app_token: action.payload.app_token,
        userId: action.payload.userid,
      };
    case "LOGOUT":
      return {
        ...initialState,
        didTryAutoLogin: true,
      };

    case "SET_DID_TRY_AL":
      return {
        ...state,
        didTryAutoLogin: true,
      };
    case "ON_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
