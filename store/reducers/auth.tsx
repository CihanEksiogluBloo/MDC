import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from "../actions/auth";

type initialStateTypes = {
  app_token: null | string,
  userId: null | number,
  didTryAutoLogin: boolean,
};


const initialState : initialStateTypes = {
  app_token: null,
  userId: null,
  didTryAutoLogin: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        app_token: action.payload.app_token,
        userId: action.payload.userId,
      };
      case LOGOUT:
        return {
          ...initialState,
          didTryAutoLogin: true,
        };
        
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    default:
      return state;
  }
};
