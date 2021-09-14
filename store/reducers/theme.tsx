import { ThemeActions } from "../actions/theme";
import { UserSelectableThemes } from "../redux-types";

type themeInitialState = {
  userTheme: UserSelectableThemes;
};

const initialState: themeInitialState = {
  userTheme: "light",
};

export default (
  state: themeInitialState = initialState,
  action: ThemeActions
): themeInitialState => {
  switch (action.type) {
    case "ChangeTheme":
      action.payload === state.userTheme && state;
      return {
        userTheme: action.payload
      };

    default:
      return state;
  }
};
