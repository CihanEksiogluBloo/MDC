import { UserSelectableThemes } from "../redux-types";

type ChangeThemeActionType = {
  readonly type: "ChangeTheme";
  payload: UserSelectableThemes;
};

export type ThemeActions = ChangeThemeActionType;

export const changeThemeAction = (
  theme: UserSelectableThemes
): ThemeActions => {
  return { type: "ChangeTheme", payload: theme };
};
