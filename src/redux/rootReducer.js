import { combineReducers } from 'redux';
import packagesReducer from './reducers/packagesReducer';
import loginReducer from './reducers/loginReducer';

const allReducers = {
    packagesReducer, loginReducer,
};

export const rootReducer = combineReducers(allReducers);