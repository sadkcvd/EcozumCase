import * as actionTypes from "../actions/actionTypes"
import initialState from './initialState';

export default function paymentReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.PAYMENT_PENDING:   
            return { ...state, pending: true};     
        case actionTypes.PAYMENT_SUCCESS:   
            return { ...state, cardNumber: action.payload, successpay: true, pending:false};           
        default:
            return state;
          
    }
};