import { combineReducers } from 'redux';
import packagesReducer from './reducers/packagesReducer';

const allReducers = {
    packagesReducer
};

export const rootReducer = combineReducers(allReducers);