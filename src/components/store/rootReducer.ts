import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeReducers';

export const rootReducer = combineReducers({
    theme : themeReducer,
});
