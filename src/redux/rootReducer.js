import { combineReducers } from 'redux';
import packagesReducer from './reducers/packagesReducer';
import loginReducer from './reducers/loginReducer';
import cartReducer from './reducers/cartReducer';
import paymentReducer from './reducers/paymentReducer';

const allReducers = {
    packagesReducer,
    loginReducer,
    cartReducer,
    paymentReducer,
};

export const rootReducer = combineReducers(allReducers);