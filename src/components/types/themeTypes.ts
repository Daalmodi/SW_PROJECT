export interface ThemeState{
    theme:'light'| 'dark';
}

 export enum ThemeActionTypes {
    TOGGLE_THEME = 'TOGGLE_THEME',
  }
export interface ToggleThemeAction {
     type: ThemeActionTypes.TOGGLE_THEME;
}

export type ThemeAction = ToggleThemeAction;
