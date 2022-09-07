import { combineReducers } from 'redux';
import packagesReducer from './reducers/packagesReducer';
import loginReducer from './reducers/loginReducer';
import cartReducer from './reducers/cartReducer';

const allReducers = {
    packagesReducer,
    loginReducer,
    cartReducer,
};

export const rootReducer = combineReducers(allReducers);