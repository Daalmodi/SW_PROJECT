import { ThemeAction, ThemeState,ThemeActionTypes } from '../types/themeTypes';

const initialState: ThemeState = {
    theme: 'light',
};

const themeReducer = (state = initialState, action: ThemeAction):ThemeState =>{
    switch(action.type){
        case ThemeActionTypes.TOGGLE_THEME:
            return{... state,theme : state.theme === 'light' ? 'dark' : 'light'};
    default:
            return state;
    }
};
export default themeReducer;
